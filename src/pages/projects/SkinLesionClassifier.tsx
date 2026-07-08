import { Layers, Activity, Image } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { skinLesionIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const SkinLesionClassifier = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={skinLesionIcon}
        title="Skin Lesion Classifier"
        subtitle="7-class skin lesion classification with a focus on melanoma recall"
        githubUrl={socialLinks.repositories.projectTwo}
        features={[
          { icon: Layers, title: 'Classes', description: '7' },
          { icon: Activity, title: 'Melanoma recall', description: '72%' },
          { icon: Image, title: 'Dataset size', description: '10K images' },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "This project fine-tunes EfficientNet-B0 via transfer learning on HAM10000, a dataset of roughly 10,000 dermatoscopic images spanning 7 skin lesion classes with a steep 58:1 class imbalance.",
            "A model trained purely for accuracy looked strong on paper but missed 40% of melanoma cases the exact failure mode that matters most in a medical context. Switching to focal loss shifted the model's attention toward the minority, higher-stakes classes, lifting melanoma recall from 60% to 72%.",
            "To confirm the model was learning the right signal rather than shortcuts in the background, I used Grad-CAM saliency maps to verify it was attending to the lesion itself. The final model is deployed as a full-stack app with a FastAPI backend and React frontend."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["PyTorch", "EfficientNet-B0", "FastAPI", "React", "Grad-CAM"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Transfer learning with EfficientNet-B0 on a 58:1 imbalanced 7-class dataset.",
            "Diagnosed a recall failure mode hidden behind a high accuracy score.",
            "Switched to focal loss, improving melanoma recall from 60% to 72%.",
            "Verified model attention with Grad-CAM saliency maps.",
            "Deployed full-stack: FastAPI backend + React frontend.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default SkinLesionClassifier;
