import { enquiryTopics, topicGroups } from "@/content/site";

/**
 * The enquiry options, grouped: where to begin, an area of life, a service. A page that opens the dialog
 * with its own topic (for example "Astrology: marriage and compatibility") passes it as `extra`, and it is
 * offered first, under "This page", so the choice on screen always matches the message.
 */
export function TopicOptions({ extra }: { extra?: string | null }) {
  return (
    <>
      {extra && (
        <optgroup label="This page">
          <option value={extra}>{extra}</option>
        </optgroup>
      )}
      {topicGroups.map((group) => (
        <optgroup key={group} label={group}>
          {enquiryTopics
            .filter((topic) => topic.group === group)
            .map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
        </optgroup>
      ))}
    </>
  );
}
