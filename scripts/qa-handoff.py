"""Read-only packaged-build smoke checks. Requires Python Playwright; sends nothing."""
import json
import os
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parent.parent
base = os.environ.get("NNG_QA_BASE", "http://127.0.0.1:3448/NNG_Codex_Build/preview-20261004-r1")
output = root / "qa-local"
output.mkdir(exist_ok=True)
paths = ["/", "/about/", "/services/", "/consultations/", "/hand-holding-program/", "/services/brain-training/", "/services/astrology/", "/services/numerology/", "/services/vastu/", "/services/stones-and-rudraksh/", "/resources/blogs/", "/shop/", "/shop/cart/"]
paths += [f"/landing/{s}/" for s in ["psychic-reader", "astrology", "numerology", "vastu", "hand-holding"]]
results = []
with sync_playwright() as p:
    browser = p.chromium.launch()
    for width in [390, 1440]:
        context = browser.new_context(viewport={"width": width, "height": 900}, reduced_motion="reduce")
        context.route("**/*", lambda r: r.continue_() if urlparse(r.request.url).hostname in ["127.0.0.1", "localhost"] else r.abort())
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        for route in paths:
            errors.clear()
            response = page.goto(base + route, wait_until="networkidle")
            assert response.status == 200, (width, route, response.status)
            assert page.locator("main h1").count() == 1, (width, route, "h1 count")
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (width, route, "overflow")
            assert "noindex" in page.locator('meta[name="robots"]').first.get_attribute("content"), (width, route, "noindex")
            broken = page.locator("img").evaluate_all("es=>es.filter(e=>e.complete&&e.naturalWidth===0).map(e=>e.src)")
            assert not broken, (width, route, "broken images", broken)
            assert not errors, (width, route, errors)
            if route in ["/", "/landing/psychic-reader/", "/landing/vastu/"]:
                name = "home" if route == "/" else route.strip("/").replace("/", "-")
                page.screenshot(path=str(output / f"{name}-{width}.png"))
            results.append({"path": route, "viewport": width, "pass": True})
        context.close()
    browser.close()
(output / "browser-smoke.json").write_text(json.dumps({"url": base, "checks": results, "externalRequestsBlocked": True, "messagesSent": False}, indent=2))
print(json.dumps({"pageViewportChecks": len(results), "pass": True, "externalRequestsBlocked": True}))
