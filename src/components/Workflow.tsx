import { SiteTranslation } from "@/data/content";
import WorkflowVisual from "./WorkflowVisual";

interface WorkflowProps {
  t: SiteTranslation;
}

export default function Workflow({ t }: WorkflowProps) {
  return (
    <section id="workflow" className="sf-section sf-workflow" aria-labelledby="workflow-title">
      <div className="office-shell">
        <h2 id="workflow-title" className="sf-heading">
          {t.workflowSection.heading}
        </h2>
        <ol className="sf-workflow__steps">
          {t.workflowSection.steps.map((step, index) => (
            <li
              className={`sf-workflow__step sf-workflow__step--${index + 1}`}
              key={step.number}
            >
              <div className="sf-workflow__visual">
                <WorkflowVisual kind={index} />
              </div>
              <div className="sf-workflow__number">{step.number}</div>
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
