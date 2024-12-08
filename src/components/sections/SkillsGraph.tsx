'use client'

import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle';
import * as d3 from 'd3';

interface Skill {
  id: string;
  group: string;
  level: number;
  priority: number;
  connections: string[];
  isSpecial?: boolean;
}

const skillsData: Skill[] = [
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

export default function SkillsGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);

  // Color mapping using Tailwind colors with higher opacity
  const colorMapping = {
    Defense: "rgba(147, 197, 253, 0.95)",   // blue-300
    Technical: "rgba(110, 231, 183, 0.95)",  // emerald-300
    Management: "rgba(251, 146, 160, 0.95)", // rose-300
    Creative: "rgba(253, 186, 116, 0.95)"    // orange-300
  };

  // Darker edge colors for better contrast
  const edgeColors = {
    Defense: "rgba(30, 58, 138, 1)",   // blue-900
    Technical: "rgba(6, 78, 59, 1)",   // emerald-900
    Management: "rgba(136, 19, 55, 1)", // rose-900
    Creative: "rgba(124, 45, 18, 1)"    // orange-900
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !svgRef.current) return;

    const width = 1000;
    const height = 700;
    const padding = 80;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Background gradient based on theme
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background", "var(--graph-bg)");

    const simulation = d3.forceSimulation(skillsData)
      .force("link", d3.forceLink().id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1))
      .force("collision", d3.forceCollide().radius(d => {
        if (d.id === "AI") return 60;  // Increased collision radius for AI
        return 50;  // Increased general collision radius
      }));

    const links = skillsData.flatMap(skill =>
      skill.connections.map(target => ({
        source: skill.id,
        target,
        priority: skill.priority
      }))
    );

    // Add glow effect
    const defs = svg.append("defs");
    
    // Create glow filter
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
    feMerge.append("feMergeNode")
      .attr("in", "coloredBlur");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    // Links with better contrast
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#94a3b8")  // slate-400 for better visibility
      .attr("stroke-width", 2)
      .attr("opacity", 0.7)
      .attr("filter", "url(#glow)");

    const node = svg.append("g")
      .selectAll("g")
      .data(skillsData)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Background circles with stronger glow
    node.append("circle")
      .attr("r", d => 48 + d.id.length)
      .attr("fill", d => edgeColors[d.group as keyof typeof edgeColors])
      .attr("opacity", 0.3)
      .attr("filter", "url(#glow)");

    // Colored circles with better contrast
    node.append("circle")
      .attr("r", d => {
        if (d.id === "AI") return 50;
        return 40 + d.level * 3 + (d.priority === 1 ? 8 : 0);
      })
      .attr("fill", d => colorMapping[d.group as keyof typeof colorMapping])
      .attr("filter", "url(#glow)")
      .attr("stroke", d => edgeColors[d.group as keyof typeof edgeColors])
      .attr("stroke-width", 3)
      .attr("opacity", 1);

    // Text with enhanced visibility and theme-aware colors
    node.append("text")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "var(--text-primary)")
      .style("font-family", "'Inter', 'Outfit', 'SF Pro Display', system-ui, sans-serif")
      .style("font-weight", "600")
      .style("font-size", d => {
        if (d.id === "AI") return "18px";
        return d.priority === 1 ? "16px" : "15px";
      })
      .style("letter-spacing", "0.02em")
      .style("text-shadow", "var(--text-shadow)")
      .style("paint-order", "stroke")
      .style("stroke", "var(--text-stroke)")
      .style("stroke-width", "2px");

    simulation.on("tick", () => {
      node.attr("transform", (d: any) => {
        d.x = Math.max(padding, Math.min(width - padding, d.x));
        d.y = Math.max(padding, Math.min(height - padding, d.y));
        return `translate(${d.x},${d.y})`;
      });

      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
    });

    simulation.force<d3.ForceLink<any, any>>("link")!.links(links);

    return () => {
      simulation.stop();
    };
  }, [mounted]);

  return (
    <section id="skills-graph" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="mt-8 bg-gray-100/90 dark:bg-gray-900/90 rounded-lg shadow-xl dark:shadow-2xl backdrop-blur-lg p-6 border border-gray-200 dark:border-gray-700">
          <style jsx>{`
            :global(:root) {
              --graph-bg: linear-gradient(to bottom right, rgb(255, 255, 255), rgb(250, 250, 250));
            }
            :global(.dark) {
              --graph-bg: linear-gradient(to bottom right, rgb(17, 24, 39), rgb(7, 10, 16));
            }
          `}</style>
          <svg
            ref={svgRef}
            className="w-full h-[700px]"
            style={{ 
              maxHeight: '80vh',
              fontFamily: "'Inter', 'Outfit', 'SF Pro Display', system-ui, sans-serif"
            }}
          />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {Object.keys(colorMapping).map((group) => (
              <div key={group} className="flex items-center">
                <div
                  className="w-6 h-6 rounded-full mr-3"
                  style={{
                    backgroundColor: colorMapping[group as keyof typeof colorMapping]
                  }}
                />
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">{group}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
