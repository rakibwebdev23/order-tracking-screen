import { Check } from "lucide-react";
import { TimelineItem } from "@/types/order";

interface StatusTimelineProps {
  items: TimelineItem[];
}

export default function StatusTimeline({ items }: StatusTimelineProps) {
  return (
    <section className="timeline-card" aria-labelledby="delivery-progress-title">
      <div className="timeline-heading">
        <div>
          <p className="section-eyebrow">ORDER UPDATES</p>
          <h2 id="delivery-progress-title">Delivery progress</h2>
        </div>
        <span className="timeline-total">{items.length} steps</span>
      </div>

      {items.length === 0 ? (
        <p className="timeline-empty">There are no delivery updates yet. Check back later.</p>
      ) : (
        <ol className="timeline-list">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li
                key={item.id}
                className={`timeline-step ${item.status}`}
                aria-current={item.status === "current" ? "step" : undefined}
              >
                <span className="timeline-marker" aria-hidden="true">
                  {item.status === "completed" ? <Check size={14} strokeWidth={2.5} /> : null}
                </span>
                {!last && <span className="timeline-connector" aria-hidden="true" />}
                <div className="timeline-content">
                  <div className="timeline-title-row">
                    <h3>{item.title}</h3>
                    {item.status === "current" && <span className="current-label">CURRENT</span>}
                  </div>
                  <p>{item.description}</p>
                  {(item.date !== "—" || item.time !== "—") && (
                    <time>{[item.date, item.time].filter((value) => value !== "—").join(" · ")}</time>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
