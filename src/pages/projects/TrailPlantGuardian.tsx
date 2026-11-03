import { Camera, Gauge, Network, Leaf } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const TrailPlantGuardian = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        fallbackIcon={Leaf}
        title="Trail Plant Guardian"
        subtitle="A photo-to-advisory tool that tells Western Ghats trekkers why the plant at their feet matters"
        githubUrl={socialLinks.repositories.projectFour}
        features={[
          { icon: Camera, title: 'Input', description: 'Plant photo → top-3 species' },
          { icon: Gauge, title: 'Confidence gate', description: 'High ≥ 0.65 · Medium ≥ 0.30' },
          { icon: Network, title: 'Grounding', description: 'Advisories use knowledge-graph facts only' },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "Trail Plant Guardian turns a photo of a plant into a short trailside advisory for trekkers in the Western Ghats. Many wild plants are recorded host plants for butterfly caterpillars, so trampling them removes food those butterflies depend on. The tool identifies the plant and explains why it matters.",
            "An EfficientNet-B0 classifier returns the top-3 species. Rather than trusting every prediction equally, a confidence gate sorts each result into a high, medium or low tier, with cut-offs of 0.65 and 0.30 tuned on a small validation set and applied once to the test set. High confidence retrieves facts for the top prediction, medium retrieves facts for all three candidates so the user can confirm, and low confidence returns no facts instead of guessing.",
            "The facts come from a knowledge graph linking host plants to the butterflies that use them and the states where each has been recorded. The advisory itself is written by a local LLM (Ollama, llama3.2) instructed to use only the retrieved facts, with a deterministic template fallback if the model isn't running and a grounding check that flags any species name not found in the retrieved data.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["Python", "PyTorch", "EfficientNet-B0", "Knowledge Graph", "Ollama", "Streamlit"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Confidence-tiered retrieval: the tier decides whether to show one species, three candidates, or nothing.",
            "Knowledge graph linking host plants, butterflies and the states they are recorded in.",
            "Advisories restricted to retrieved facts, with a template fallback so the app never fails.",
            "Grounding check that flags species names in generated text that are not in the retrieved facts.",
            "Runs locally end to end: PyTorch inference plus a local Ollama model, with no external API.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default TrailPlantGuardian;
