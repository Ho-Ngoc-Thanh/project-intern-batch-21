// import { BarElement, Plugin } from 'chart.js';

// export const propertyOverviewPlugin: Plugin<'bar'> = {
//   id: 'propertyOverviewPlugin',
//   beforeDatasetsDraw(chart) {
//     const { ctx, chartArea } = chart;
//     const labels = chart.data.labels ?? [];
//     const meta = chart.getDatasetMeta(0);

//     ctx.save();

//     for (let i = 0; i < labels.length; i++) {
//       const bar = meta.data[i] as BarElement;
//       if (!bar) continue;

//       const { x, width } = bar.getProps(['x', 'width'], true);
//       if (x == null || width == null) continue;

//       const bgTop = chartArea.top -11;
//       const bgBottom = chartArea.bottom - 4;

//       const bgHeight = bgBottom - bgTop;
//       const bgWidth = width + 8;
//       const left = x - bgWidth / 2;

//       ctx.fillStyle = '#f3f4f6';
//       roundRect(ctx, left, bgTop, bgWidth, bgHeight, 0);
//       ctx.fill();

//       ctx.fillStyle = '#767A84';
//       ctx.font = '500 12px Inter, Albert Sans, sans-serif'; 
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.fillText(String(labels[i]), x, bgTop + 8);
//     }

//     ctx.restore();
//   }
// };

// function roundRect(
//   ctx: CanvasRenderingContext2D,
//   x: number,
//   y: number,
//   width: number,
//   height: number,
//   radius: number
// ) {
//   ctx.beginPath();

//   // bo mềm hơn (dùng bezier thay vì quadratic)
//   ctx.moveTo(x + radius, y);

//   ctx.bezierCurveTo(x + radius * 0.5, y, x + width - radius * 0.5, y, x + width - radius, y);
//   ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

//   ctx.lineTo(x + width, y + height);
//   ctx.lineTo(x, y + height);

//   ctx.lineTo(x, y + radius);
//   ctx.quadraticCurveTo(x, y, x + radius, y);

//   ctx.closePath();
// }



import { BarElement, Plugin } from 'chart.js';

export const propertyOverviewPlugin: Plugin<'bar'> = {
  id: 'propertyOverviewPlugin',
  beforeDatasetsDraw(chart) {
    const { ctx, chartArea } = chart;
    const labels = chart.data.labels ?? [];
    const meta = chart.getDatasetMeta(0);

    ctx.save();

    for (let i = 0; i < labels.length; i++) {
      const bar = meta.data[i] as BarElement;
      if (!bar) continue;

      const { x, width } = bar.getProps(['x', 'width'], true);
      if (x == null || width == null) continue;

      const bgTop = chartArea.top - 10;
      const bgBottom = chartArea.bottom-2;

      const bgHeight = bgBottom - bgTop;
      const bgWidth = width 
      const left = x - bgWidth / 2;

ctx.fillStyle = '#FFFFFF'; // ← đổi màu tại đây
roundRect(ctx, left, bgTop, bgWidth, bgHeight, 8);
ctx.fill();

      


      ctx.fillStyle = '#767A84';
      ctx.font = '500 12px Inter, Albert Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(labels[i]), x, bgTop + 11);
    }

    ctx.restore();
  }
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}