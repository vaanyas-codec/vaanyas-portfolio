import { FlaskConical, TrendingUp, ShieldCheck, Network } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const DacsEnsemble = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        fallbackIcon={Network}
        title="DACS Ensemble"
        subtitle="A research-based project in ML"
        githubUrl={socialLinks.repositories.projectFive}
        features={[
          { icon: FlaskConical, title: 'Evaluation', description: '12 UCI datasets + 7 confirmatory + 4 medical' },
          { icon: TrendingUp, title: 'Main study', description: '3 significant wins, 0 losses vs soft voting' },
          { icon: ShieldCheck, title: 'Integrity', description: 'Leak screen, pre-registered protocols, pytest suite' },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "DACS + Consensus/Debate Ensemble selects a subset of classifiers from a 13-model pool using a competitive accuracy margin, uses diversity only to choose among classifiers that are nearly as accurate as the best, and then refines predictions through iterative, reliability-weighted belief revision. It is compared against soft voting on 12 UCI datasets using McNemar tests with Holm-Bonferroni correction.",
            "The most interesting part was the evaluation. The first version looked strong but had a test-label leak in its hyperparameter selection. After fixing it, the method showed a significant loss on Banknote Authentication, where it picked an 83.6%-accurate Naive Bayes over a 99.9%-accurate Extra Trees because disagreement rewards being wrong in a unique way. The accuracy margin fixed that. Later I found that the Pima Diabetes file had been imputed with class-conditional medians, so the label could be read off the features. That result was withdrawn and the repository carries an erratum.",
            "The corrected results are 3 significant wins and 0 significant losses against soft voting on the 12 main datasets, and ahead on 6 of 7 confirmatory datasets under a protocol written before any run (sign test p = 0.031). A pre-specified test on four medical datasets did not support an advantage on medical data, and ablations showed the debate step adds essentially nothing: most of the gain comes from dropping a weak voting member and weighting a larger pool. The repository documents all of it.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["Python", "scikit-learn", "Flask", "pytest", "joblib", "Statistical Testing"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Found and fixed a test-label leak, then moved fold-level selection into a function with no test-label parameter so the leak cannot recur.",
            "Detected a label-leaking imputation in the Pima dataset, withdrew the result, and added a data-integrity screen with tests.",
            "Pre-registered protocols for the confirmatory and medical evaluations, with the medical protocol's SHA-256 hash committed.",
            "McNemar tests with Holm-Bonferroni correction; post hoc and exploratory analyses clearly labelled as such.",
            "Reported negative results plainly: the debate step and diversity selection add no measurable benefit beyond pool weighting.",
            "Flask demo app with joblib model caching keyed on a hash of the dataset content.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default DacsEnsemble;
