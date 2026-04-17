import { useHayc } from '../hayc/config-context';

export default function WorkingProcessSection() {
  const { t, config, cp } = useHayc();
  const h = config.homePageConfig;

  return (
    <div className="cinkes_working_process_area pt-115 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cinkes_section_title text-center mb-50">
              <h5 className="cinkes_sub_title theme_clr" {...cp('homePageConfig.workingEyebrow')}>
                {t(h.workingEyebrow)}
              </h5>
              <h2 className="cinkes_title" {...cp('homePageConfig.workingTitle')}>
                {t(h.workingTitle)}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {h.workingSteps.map((step, i) => (
            <div key={i} className="col-xxl-4 col-md-6">
              <div className={`cinkes_working_process_step ${step.stepClass} text-center mb-30`}>
                <span className="cinkes_working_process_step_icon" aria-hidden>
                  <StepIcon kind={step.icon} />
                </span>
                <div className="cinkes_working_process_step_text">
                  <h4 className="cinkes_working_process_step_title" {...cp(`homePageConfig.workingSteps.${i}.title`)}>
                    {t(step.title)}
                  </h4>
                  <p {...cp(`homePageConfig.workingSteps.${i}.body`)}>{t(step.body)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepIcon({ kind }: { kind: 'analytics' | 'users' | 'bullhorn' }) {
  const c = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 };
  if (kind === 'analytics') {
    return (
      <svg {...c}>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    );
  }
  if (kind === 'users') {
    return (
      <svg {...c}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M18.5 2A2.5 2.5 0 0 1 21 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.46.06H5.5A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4h2.96a2.5 2.5 0 0 1 2.46-.06A2.5 2.5 0 0 1 18.5 2z" />
    </svg>
  );
}
