import { useEffect, useRef, useState, useMemo } from 'react';
import SectionTitle from '../SectionTitle';
import * as d3 from 'd3';

interface D3Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  level: number;
  priority: number;
  connections: string[];
  isSpecial?: boolean;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface LinkType {
  source: string | D3Node;
  target: string | D3Node;
  priority: number;
}

const skillsData: D3Node[] = [
  // Core Defense & Military Technology (Priority 1)
  { id: "MIL COMMS", group: "Defense", level: 5, priority: 1, connections: ["RADIO SYS", "SYS INTEG", "IVVQ"] },
  { id: "RADIO SYS", group: "Defense", level: 5, priority: 1, connections: ["ELEC", "SW DEV", "IVVQ"] },
  { id: "TAC SYS", group: "Defense", level: 5, priority: 1, connections: ["SYS INTEG", "IVVQ"] },
  { id: "IVVQ", group: "Defense", level: 5, priority: 1, connections: ["SYS ENG"] },
  
  // Core Technical Skills (Priority 1)
  { id: "SYS INTEG", group: "Technical", level: 5, priority: 1, connections: ["PROJ MGT", "SW DEV", "SYS ENG"] },
  { id: "ELEC", group: "Technical", level: 5, priority: 1, connections: ["SW DEV", "R&D"] },
  { id: "SYS ENG", group: "Technical", level: 5, priority: 1, connections: ["R&D", "PROJ MGT"] },
  { id: "R&D", group: "Technical", level: 5, priority: 1, connections: ["AI"] },
  
  // Management & Business Skills (Priority 1)
  { id: "PROJ MGT", group: "Management", level: 5, priority: 1, connections: ["LEAD", "STRAT PLAN", "BIZ DEV"] },
  { id: "LEAD", group: "Management", level: 5, priority: 1, connections: ["STRAT PLAN"] },
  { id: "STRAT PLAN", group: "Management", level: 5, priority: 1, connections: ["BIZ DEV"] },
  { id: "BIZ DEV", group: "Management", level: 5, priority: 1, connections: ["TENDER", "PROPOSALS"] },
  { id: "TENDER", group: "Management", level: 4, priority: 1, connections: ["PROPOSALS"] },
  { id: "PROPOSALS", group: "Management", level: 4, priority: 1, connections: [] },
  
  // Current Focus (Priority 2)
  { id: "SW DEV", group: "Technical", level: 4, priority: 2, connections: ["WEB DEV"] },
  { id: "WEB DEV", group: "Technical", level: 4, priority: 2, connections: [] },
  
  // New Interests (Priority 3)
  { id: "DESIGN", group: "Creative", level: 3, priority: 3, connections: ["WEB DEV"] },
  { id: "AI", group: "Creative", level: 3, priority: 3, connections: ["SW DEV"], isSpecial: true },
];

interface SkillsGraphProps {
  forceLightTheme?: boolean;
}

export default function SkillsGraph({ forceLightTheme = false }: SkillsGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isPdfExport, setIsPdfExport] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsPdfExport(window.location.href.includes('localhost:3000'));
  }, []);

  const colorMapping = useMemo(() => {
    if (forceLightTheme || isPdfExport) {
      return {
        Defense: "rgba(59, 130, 246, 0.7)",      // Lighter blue
        Technical: "rgba(16, 185, 129, 0.7)",    // Lighter green
        Management: "rgba(244, 63, 94, 0.7)",    // Lighter red/pink
        Creative: "rgba(245, 158, 11, 0.7)"      // Lighter orange
      };
    }
    return {
      Defense: "rgba(147, 197, 253, 0.95)",
      Technical: "rgba(110, 231, 183, 0.95)",
      Management: "rgba(251, 146, 160, 0.95)",
      Creative: "rgba(253, 186, 116, 0.95)"
    };
  }, [forceLightTheme, isPdfExport]);

  const edgeColors = useMemo(() => {
    if (forceLightTheme || isPdfExport) {
      return {
        Defense: "rgba(29, 78, 216, 1)",     // Darker blue
        Technical: "rgba(6, 95, 70, 1)",     // Darker green
        Management: "rgba(190, 18, 60, 1)",  // Darker red/pink
        Creative: "rgba(180, 83, 9, 1)"      // Darker orange
      };
    }
    return {
      Defense: "rgba(30, 58, 138, 1)",
      Technical: "rgba(6, 78, 59, 1)",
      Management: "rgba(136, 19, 55, 1)",
      Creative: "rgba(124, 45, 18, 1)"
    };
  }, [forceLightTheme, isPdfExport]);

  useEffect(() => {
    if (!mounted || !svgRef.current) return;

    const width = 1000;
    const height = 700;
    const padding = 80;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const simulation = d3.forceSimulation<D3Node>(skillsData)
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1))
      .force("collision", d3.forceCollide<D3Node>().radius(d => d.id === "AI" ? 60 : 50));

    const links = skillsData.flatMap(skill => 
      skill.connections.map(target => ({
        source: skill.id,
        target,
        priority: skill.priority
      } as LinkType))
    );

    const linkForce = d3.forceLink<D3Node, LinkType>()
      .id(d => d.id)
      .distance(100)
      .links(links);

    simulation.force("link", linkForce);

    // Add glow effect
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    filter.append("feGaussianBlur")
      .attr("class", "blur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", forceLightTheme || isPdfExport ? "#6b7280" : "#94a3b8")
      .attr("stroke-width", 2)
      .attr("opacity", 0.7)
      .attr("filter", "url(#glow)");

    const node = svg.append("g")
      .selectAll<SVGGElement, D3Node>("g")
      .data(skillsData)
      .join("g")
      .call(d3.drag<SVGGElement, D3Node>()
        .on("start", (event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("drag", (event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    node.append("circle")
      .attr("r", d => 48 + d.id.length)
      .attr("fill", d => edgeColors[d.group as keyof typeof edgeColors])
      .attr("opacity", 0.3)
      .attr("filter", "url(#glow)");

    node.append("circle")
      .attr("r", d => d.id === "AI" ? 50 : 40 + d.level * 3 + (d.priority === 1 ? 8 : 0))
      .attr("fill", d => colorMapping[d.group as keyof typeof colorMapping])
      .attr("filter", "url(#glow)")
      .attr("stroke", d => edgeColors[d.group as keyof typeof edgeColors])
      .attr("stroke-width", 3)
      .attr("opacity", 1);

    node.append("text")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", d => d.group === "Management" ? "white" : "inherit")
      .style("font-family", "'Inter', 'Outfit', 'SF Pro Display', system-ui, sans-serif")
      .style("font-weight", "600")
      .style("font-size", d => d.id === "AI" ? "18px" : d.priority === 1 ? "16px" : "15px")
      .style("letter-spacing", "0.02em")
      .style("text-shadow", forceLightTheme || isPdfExport ? "none" : "var(--text-shadow)")
      .style("paint-order", "stroke")
      .style("stroke", forceLightTheme || isPdfExport ? "transparent" : "var(--text-stroke)")
      .style("stroke-width", "2px");

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as D3Node).x!)
        .attr("y1", d => (d.source as D3Node).y!)
        .attr("x2", d => (d.target as D3Node).x!)
        .attr("y2", d => (d.target as D3Node).y!);

      node.attr("transform", d => {
        const x = Math.max(padding, Math.min(width - padding, d.x!));
        const y = Math.max(padding, Math.min(height - padding, d.y!));
        return `translate(${x},${y})`;
      });
    });

    return () => {
      simulation.stop();
    };
  }, [mounted, colorMapping, edgeColors, forceLightTheme, isPdfExport]);

  return (
    <section id="skills-graph" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="mt-8 bg-gray-100/90 dark:bg-gray-900/90 rounded-lg shadow-xl dark:shadow-2xl backdrop-blur-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <svg 
              ref={svgRef} 
              className="w-full h-[700px]" 
              style={{ 
                maxHeight: '80vh',
                fontFamily: "'Inter', 'Outfit', 'SF Pro Display', system-ui, sans-serif"
              }} 
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {Object.keys(colorMapping).map((group) => (
              <div key={group} className="flex items-center">
                <div 
                  className="w-6 h-6 rounded-full mr-3"
                  style={{ backgroundColor: colorMapping[group as keyof typeof colorMapping] }}
                />
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                  {group}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
