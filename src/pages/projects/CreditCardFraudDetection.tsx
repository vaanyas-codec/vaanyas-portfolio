import { Target, TrendingUp, Percent } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { fraudDetectionIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const CreditCardFraudDetection = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={fraudDetectionIcon}
        title="Credit Card Fraud Detection"
        subtitle="A leakage-free ML pipeline for detecting fraud in a severely imbalanced dataset"
        githubUrl={socialLinks.repositories.projectOne}
        features={[
          { icon: TrendingUp, title: 'F1 Score', description: '91.23%' },
          { icon: Target, title: 'ROC-AUC', description: '99.31%' },
          { icon: Percent, title: 'Fraud rate', description: '0.17%' },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "This project tackles credit card fraud detection on a dataset where fraudulent transactions make up only 0.17% of all records. The core challenge wasn't just modeling it was building a pipeline that avoids data leakage while handling extreme class imbalance.",
            "I applied SMOTE to oversample the minority class, alongside feature scaling and outlier capping, then benchmarked four classifiers. XGBoost came out on top, achieving 91.23% F1 and 99.31% ROC-AUC, validated with 5-fold cross-validation across six metrics including PR-AUC which matters more than raw accuracy on such skewed data.",
            "To make the results usable beyond a notebook, I built an interactive dashboard to visualize model performance and explore decision-threshold tradeoffs. A manuscript based on this work is currently under review at the Journal of Young Investigators."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["Python", "scikit-learn", "XGBoost", "Pandas", "SMOTE"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Designed a leakage-free preprocessing pipeline, fit only on training folds.",
            "Benchmarked four classifiers under identical evaluation conditions.",
            "Evaluated with 5-fold CV across six metrics, prioritizing PR-AUC for imbalance.",
            "Built an interactive dashboard for threshold tuning and performance visualization.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CreditCardFraudDetection;
