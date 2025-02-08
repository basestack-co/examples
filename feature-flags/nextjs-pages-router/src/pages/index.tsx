// Feature Flags Hooks
import { useFlag, useFlags } from "@/libs/feature-flags/hooks";

export default function Home() {
  const count = useFlag<{ text: string }>("count");
  const data = useFlags();

  return (
    <div>
      <main>
        {count.enabled && (
          <div>
            <a>
              {!count.enabled
                ? "Count is not enabled"
                : `${count?.payload?.text} 0`}
            </a>
          </div>
        )}

        <h3>All the available flags</h3>
        <ul>
          {data.flags.map((flag, index) => {
            return (
              <li
                key={index}
              >{`Slug: ${flag.slug} Enabled: ${flag.enabled}`}</li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
