const fpsGameVideo = new URL("../assets/FPS Game.mp4", import.meta.url).href;
const pianoVideo = new URL("../assets/Piano.mp4", import.meta.url).href;
const tilemapVideo = new URL("../assets/tile2map.mp4", import.meta.url).href;
const printingVideo = new URL("../assets/3d printing vedio.mp4", import.meta.url).href;

export const researchProjects = [
  {
    id: "scoresight",
    visible: true,
    title: "ScoreSight",
    subtitle: "Real-Time Music Reading Support for Musicians with Low Vision",
    subtitleItalic: true,
    institution: "MadAbility Lab, University of Wisconsin–Madison",
    period: "May 2025–Present",
    advisor: "Prof. Yuhang Zhao",
    description: [
      "I initiated and led ScoreSight, which provides synchronized visual guidance for low-vision pianists. I built accessible interfaces, co-developed audio-based score following with Online Time Warping, and led system evaluation and ongoing user studies.",
    ],
    highlights: ["ScoreSight"],
    //contribution: "Project Lead · First Author · UIST ’26 Adjunct Demo",
    media: {
      type: "video",
      src: pianoVideo,
      alt: "ScoreSight live piano performance and music-reading support demonstration",
    },
    award: "",
    links: [],
  },
  {
    id: "multimodal-rag",
    visible: true,
    title: "Tile2Map",
    subtitle: "LLMs & Procedural Content Generation",
    institution: "University of California, Santa Cruz",
    period: "May 2025–Aug. 2025",
    advisor: "Prof. Jim Whitehead",
    description: [
      "I developed a LangChain-based multimodal RAG pipeline to generate structured, context-aware descriptions of tile-based game assets, using embedding similarity to retrieve relevant knowledge for procedural content generation. I also designed an RGB edge-matching algorithm to infer tile adjacency and reconstruct structurally valid game maps.",
    ],
    //highlights: ["LangChain-based multimodal RAG pipeline", "RGB edge-matching algorithm"],
    media: {
      type: "video",
      src: tilemapVideo,
      alt: "Tile2Map multimodal RAG and procedural game map generation demonstration",
    },
    award: "",
    links: [],
  },
  {
    id: "eliminate-the-virus",
    visible: true,
    title: "Eliminate the Virus",
    subtitle: "Educational Game Design & Development",
    institution: "Peking University–Tencent Joint Summer Program",
    period: "Jun. 2024–Sep. 2024",
    advisor: "Prof. Junjie Shang",
    description: [
      "I initiated and led an educational FPS game about virus transmission and pandemic prevention, designed the game mechanics, and led development in Lua.",
    ],
    media: {
      type: "video",
      src: fpsGameVideo,
      alt: "Eliminate the Virus FPS gameplay video",
    },
    award: "Best Game Award",
    links: [{ label: "Play on Roblox", href: "" }], // 填入真实链接后按钮才会显示。
  },
  {
    id: "prosthetic-finger",
    visible: true,
    title: "Prosthetic Finger",
    subtitle: "Assistive Technology & 3D Printing",
    institution: "King’s College London",
    role: "",
    period: "Jun. 2024–Sep. 2023",
    advisor: "Prof. Kawal Rhode",
    description: [
      "In collaboration with the medical school, I designed a low-cost, customizable prosthetic finger for people with finger impairments. The design features a single degree of freedom, three phalanges, and passive adaptive grasping. I used ITK-SNAP and Fusion 360 for anatomical modeling and kinematic analysis, then iterated through 3D-printed prototypes to evaluate grasp stability and range of motion."
    ],
    media: {
      type: "video",
      src: printingVideo,
      alt: "3D printing the prosthetic finger prototype",
    },
    award: "",
    links: [],
  },
  // 新项目模板 1：填写下列字段，并将 visible 改为 true 才会显示。
  {
    id: "future-project-1",
    visible: false,
    title: "Future project 1",
    subtitle: "Project area or category",
    institution: "Institution or organization",
    role: "Your role",
    period: "Month Year–Month Year",
    advisor: "",
    description: ["Add your project introduction here.", "Add methods or outcomes here."],
    media: { type: "image", src: "", alt: "" },
    award: "",
    links: [{ label: "Project website", href: "" }],
  },
  // 新项目模板 2：同样默认隐藏，不会生成页面元素或留白。
  {
    id: "future-project-2",
    visible: false,
    title: "Future project 2",
    subtitle: "Project area or category",
    institution: "Institution or organization",
    role: "Your role",
    period: "Month Year–Month Year",
    advisor: "",
    description: ["Add your project introduction here.", "Add methods or outcomes here."],
    media: { type: "image", src: "", alt: "" },
    award: "",
    links: [{ label: "Project website", href: "" }],
  },
];
