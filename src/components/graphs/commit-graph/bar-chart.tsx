import React, { FC, useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ScaleBand, ScaleLinear } from 'd3';

export interface KeyValue {
  key: string;
  value: number;
}

export interface BarChartProps {
  values: object[];
  groupKey: string;
  keys: string[];
  colors: string[];
  backgroundColor: string;
  onSelect: Function;
}

const BarChart: FC<BarChartProps> = ({
  values,
  groupKey,
  keys,
  colors,
  backgroundColor,
  onSelect,
}: BarChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const drawBarChart = (data: object[], containerEl: HTMLElement) => {
    const margin = {
      top: 10,
      right: 20,
      bottom: 10,
      left: 20,
    };
    const aspectRatio = 4;

    const parent = containerEl.parentElement as HTMLElement;
    const width = parent.offsetWidth;
    const height = width / aspectRatio;

    const min = 0;
    const color: Function = d3.scaleOrdinal().range(colors);
    const max = d3.max(data, (d: object) => d3.max(keys, (k: string) => d[k]));

    // Y
    const y: ScaleLinear<number, number> = d3
      .scaleLinear()
      .domain([min, max])
      .nice()
      .rangeRound([height - margin.bottom, margin.top]);

    // GENERAL X
    const x0: ScaleBand<string> = d3
      .scaleBand()
      .domain(data.map((d) => d[groupKey]))
      .rangeRound([margin.left, width - margin.right])
      .paddingInner(0.5); // padding between groups

    // GROUP X
    const x1: ScaleBand<string> = d3
      .scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05); // padding within groups

    // CONTAINER
    const container: any = d3
      .select(containerEl)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', backgroundColor)
      .on('mouseleave', (__ev: MouseEvent) => {
        onSelect(null);
        d3.selectAll('rect')
          .transition()
          .duration(200)
          .ease(d3.easeLinear)
          .style('opacity', 1);
      });

    container
      .append('g')
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('class', 'commit')
      .attr('id', (__d: object, idx: number) => idx)
      .attr('transform', (d: object) => `translate(${x0(d[groupKey])},0)`)
      .selectAll('rect')
      .data((d: object) => keys.map((key) => ({ key, value: d[key] })))
      .join('rect')
      .attr('x', (d: KeyValue) => x1(d.key))
      .attr('y', (d: KeyValue) => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', (d: KeyValue) => y(0) - y(d.value || 0))
      .attr('fill', (d: KeyValue) => color(d.key));

    container.selectAll('g').on('mouseover', (event: MouseEvent) => {
      const targetEl = event?.target as HTMLElement | undefined;
      const parentNode = targetEl?.parentElement;

      if (parentNode) {
        onSelect(parseInt(parentNode.id, 10));
        // Decrease opacity of all commits;
        d3.selectAll('rect').style('opacity', 0.3);
        // Set full opacity for hovered commit;
        d3.select(parentNode).selectChildren().style('opacity', 1);
      }
    });

    return container.node();
  };

  useLayoutEffect(() => {
    if (containerRef?.current) {
      const children = d3.select(containerRef?.current).selectChildren();
      if (children.size() !== 0) {
        d3.select(containerRef?.current).selectChildren().remove();
      }
      drawBarChart(values, containerRef.current);
    }
  }, [JSON.stringify(values), groupKey, keys, backgroundColor]);

  return <div ref={containerRef} />;
};

export default BarChart;
