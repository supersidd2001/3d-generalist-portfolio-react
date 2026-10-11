export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Vehicles' | 'Machinery' | 'Environment';
  thumbnail: string;
  artstationImage: string;
  gallery: { url: string; label: string }[];
  software: string[];
  specs: {
    polyCount?: string;
    renderEngine?: string;
    textureRes?: string;
    workflow?: string;
  };
  summary: string;
  description: string;
  keyFeatures: string[];
  artstationUrl: string;
  featured?: boolean;
}

const publicAsset = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

export const PROJECTS: Project[] = [
  {
    id: 'ww2-military-motorcycle',
    title: 'WW2 Military Motorcycle with Sidecar',
    subtitle: 'World War II Military Vehicle & Hard-Surface Modeling',
    category: 'Vehicles',
    thumbnail: publicAsset('ww2_motorcycle.jpg'),
    artstationImage: 'https://cdna.artstation.com/p/assets/images/images/102/929/370/large/soham-untitled.jpg?1791051534',
    gallery: [
      { url: publicAsset('ww2_motorcycle.jpg'), label: 'Primary Studio Render' },
      { url: 'https://cdna.artstation.com/p/assets/images/images/102/929/370/large/soham-untitled.jpg?1791051534', label: 'Full Resolution ArtStation Post' }
    ],
    software: ['Blender', 'Substance Painter', 'Blender Cycles'],
    specs: {
      polyCount: 'Detailed Mechanical Hard-Surface',
      renderEngine: 'Blender Cycles Renderer',
      textureRes: 'PBR Battlefield Weathering',
      workflow: 'Hard-Surface Modeling & Substance Texturing'
    },
    summary: 'A World War II-inspired military motorcycle featuring intricate mechanical details, engine block, wire-spoke wheels, suspension, exhaust, fuel tank, seat, and rear storage sidecar.',
    description: 'Created using Blender for 3D modeling and Substance Painter for texturing. The project focuses on realistic mechanical assemblies—including engine cylinders, suspension springs, and chassis structure. The texturing features an authentic worn battlefield aesthetic with scratches, dust, grease, and metal surface abrasion to evoke wartime service.',
    keyFeatures: [
      'Authentic sidecar chassis with passenger tub and rear spare tire mount',
      'Realistic mechanical assembly: exposed boxer engine, cooling fins, exhaust routing, and drive shaft',
      'Spoke wheels with heavy military tread and stamped registration plate (WH-20715)',
      'Substance Painter PBR weathering: edge chipping, accumulated mud, dust layers, and oxidized metal',
      'Studio 3-point lighting setup rendered in Blender Cycles to accentuate surface contours'
    ],
    artstationUrl: 'https://www.artstation.com/artwork/DYLWe0',
    featured: true
  },
  {
    id: 'vintage-biplane-aircraft',
    title: 'Vintage Military Biplane',
    subtitle: 'Classic Aviation Aircraft 3D Modeling & Scene Dressing',
    category: 'Vehicles',
    thumbnail: publicAsset('biplane_aircraft.jpg'),
    artstationImage: 'https://cdnb.artstation.com/p/assets/images/images/102/928/361/large/soham-screenshot-2026-09-25-231641.jpg?1791048474',
    gallery: [
      { url: publicAsset('biplane_aircraft.jpg'), label: 'Tarmac Aircraft Beauty Render' },
      { url: 'https://cdnb.artstation.com/p/assets/images/images/102/928/361/large/soham-screenshot-2026-09-25-231641.jpg?1791048474', label: 'Original ArtStation Screenshot' }
    ],
    software: ['Blender', 'Blender Cycles'],
    specs: {
      polyCount: 'Airframe & Engine Mechanical Detailing',
      renderEngine: 'Blender Cycles',
      textureRes: 'Weathered Paint & Wood PBR',
      workflow: 'Hard-Surface Aviation Modeling'
    },
    summary: 'A classic 3D biplane model capturing early military aviation with radial engine, carved wooden propeller, wire rigging, cockpit, rear defense gun, and airfield dressing.',
    description: 'Modeled in Blender with a focus on capturing the timeless aesthetic of early aviation. The model features dual-tier wings connected with structural struts and tension wires, an exposed radial cylinder engine, a wooden propeller with metal hub, open cockpit, defensive machine gun, and weathered airfield props including stacked spare tires, wooden crates, and traffic cones.',
    keyFeatures: [
      'Dual-wing aerodynamic construction with interplane struts and cross-bracing wires',
      'Exposed multi-cylinder radial engine with cowling and carved wooden two-blade propeller',
      'Cockpit details with windshield, step plate, and rear defensive machine gun mount',
      'Tricycle landing gear with streamlined wheel spats and tail skid',
      'Airfield environment set dressing with oil drum, wooden cargo crate, and landing cones'
    ],
    artstationUrl: 'https://www.artstation.com/artwork/31Ek3J',
    featured: true
  },
  {
    id: 'vintage-drill-press',
    title: 'Vintage Workshop Drill Press',
    subtitle: 'Industrial Workshop Machinery & Hero Prop',
    category: 'Machinery',
    thumbnail: publicAsset('drill_press.webp'),
    artstationImage: 'https://cdnb.artstation.com/p/assets/images/images/102/644/283/large/soham-untitled.webp?1790141889',
    gallery: [
      { url: publicAsset('drill_press.webp'), label: 'Workshop Machinery Isolated Render' },
      { url: 'https://cdnb.artstation.com/p/assets/images/images/102/644/283/large/soham-untitled.webp?1790141889', label: 'ArtStation High-Res Asset' }
    ],
    software: ['Blender', 'Blender Cycles'],
    specs: {
      polyCount: 'Industrial Mechanical Hard Surface',
      renderEngine: 'Blender Cycles',
      textureRes: 'Cast Iron & Industrial Enamel',
      workflow: 'Hero Prop Modeling & Mechanical Design'
    },
    summary: 'A 3D model of a classic green workshop drill press featuring motor housing, drill chuck, spindle feed lever, adjustable table, and cast-iron base.',
    description: 'This hero prop project showcases mechanical authenticity and manufacturing detail. Modeled in Blender, it recreates vintage workshop equipment with an electric motor, wiring conduit, speed-belt pulley cover, depth stop, key chuck, height-adjustable work table, and heavy slotted mounting base with authentic workshop wear and paint chipping.',
    keyFeatures: [
      'Industrial green enameled head assembly with motor housing, electrical switch, and specification placard',
      'Precise mechanical drill chuck with jaws, quill, and 3-spoke feed lever with handles',
      'Central cylindrical steel column with height-adjustable slotted work table',
      'Cast-iron base with anchor slots and realistic industrial edge wear and grime',
      'Studio isolation lighting with subtle rim light defining mechanical silhouettes'
    ],
    artstationUrl: 'https://www.artstation.com/artwork/yAD93x',
    featured: true
  },
  {
    id: 'quiet-night-study',
    title: 'A Quiet Night in the Old Study',
    subtitle: 'Atmospheric Nocturnal Interior & Volumetric Lighting',
    category: 'Environment',
    thumbnail: publicAsset('quiet_night_study.webp'),
    artstationImage: 'https://cdna.artstation.com/p/assets/images/images/102/636/112/large/soham-lanteri-output.webp?1790108677',
    gallery: [
      { url: publicAsset('quiet_night_study.webp'), label: 'Volumetric Night Study Render' },
      { url: 'https://cdna.artstation.com/p/assets/images/images/102/636/112/large/soham-lanteri-output.webp?1790108677', label: 'ArtStation Output' }
    ],
    software: ['Blender', 'Blender Cycles'],
    specs: {
      polyCount: 'Full Environment Scene',
      renderEngine: 'Blender Cycles Renderer',
      textureRes: 'Wood, Brick & Glass PBR',
      workflow: 'Atmospheric Environment & Volumetric Lighting'
    },
    summary: 'A quiet and cozy nocturnal study room scene illuminated by an antique kerosene lantern casting warm volumetric light across an aged wooden desk, open book, and brick wall.',
    description: 'Designed to evoke tranquility and warmth in a nocturnal interior setting. The scene centers around an antique brass kerosene lantern whose flame casts warm golden volumetric light rays through the room. On the desk sits an open manuscript with printed text and a ceramic cup, framed by a high wooden chair and a barred window revealing moonlit fog outside.',
    keyFeatures: [
      'Detailed vintage kerosene lantern model with glowing wick, glass chimney, and brass hardware',
      'Rustic timber study desk with wood grain, pull drawer, and antique brass pull knob',
      'Storytelling props: open manuscript with readable page layout, tea mug, and high-back wooden chair',
      'Volumetric atmospheric fog catching directional lantern rays and window moonlight',
      'Exposed aged red-brick masonry wall providing tactile contrast against smooth wood surfaces'
    ],
    artstationUrl: 'https://www.artstation.com/artwork/o0brEw',
    featured: true
  }
];

export const SKILLS_MATRIX = [
  {
    category: 'Hard-Surface Modeling',
    level: 95,
    icon: 'Layers',
    tools: 'Blender, Maya',
    description: 'Detailed military vehicles (motorcycles, biplanes), industrial machinery, clean quad topology, and precision mechanical assemblies.'
  },
  {
    category: 'Hero Prop Modeling',
    level: 92,
    icon: 'Cpu',
    tools: 'Blender',
    description: 'Authentic mechanical props such as vintage drill presses, engines, suspension systems, and workshop tools with real-world proportions.'
  },
  {
    category: 'Texturing & PBR LookDev',
    level: 90,
    icon: 'Palette',
    tools: 'Substance Painter, Blender',
    description: 'Battlefield weathering, rust, dirt, dust, chipped paint, metal scratches, roughness mapping, and authentic surface wear.'
  },
  {
    category: 'Environment Art & Lighting',
    level: 94,
    icon: 'Sun',
    tools: 'Blender Cycles',
    description: 'Atmospheric scene composition, volumetric lighting, warm interior mood lighting, natural shadows, and storytelling set dressing.'
  }
];

export const PIPELINE_STEPS = [
  {
    step: '01',
    title: 'Reference & Proportions',
    desc: 'Gathering historical and mechanical blueprints to establish accurate scale, silhouette, and component placement.'
  },
  {
    step: '02',
    title: 'Hard-Surface 3D Modeling',
    desc: 'Crafting clean geometry in Blender—from engine blocks and wing struts to mechanical drill spindles and desk props.'
  },
  {
    step: '03',
    title: 'UV Mapping & Seam Layout',
    desc: 'Optimizing texture coordinates, eliminating distortion, and packing islands to ensure sharp texel density.'
  },
  {
    step: '04',
    title: 'Substance Painter Texturing',
    desc: 'Building multi-layer PBR materials: base paint, surface micro-scratches, edge wear, rust, grease, and battlefield grime.'
  },
  {
    step: '05',
    title: 'Cycles Cinematic Rendering',
    desc: 'Setting up physically plausible lights, volumetric fog rays, studio cyclorama, and rendering final high-res portfolios.'
  }
];
