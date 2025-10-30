import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// --- Custom Plugin for Center Text ---
// This plugin draws text in the middle of the doughnut chart.
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
    ctx.restore();

    // Get the text from the dataset's 'centerText' property
    const text = chart.data.datasets[0].centerText || '';
    if (!text) return;

    // Font settings
    const fontSize = (height / 100).toFixed(2);
    ctx.font = `bold ${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#333'; // Text color

    // Calculate text position
    const textX = Math.round((left + right) / 2);
    const textY = Math.round((top + bottom) / 2);

    // Draw the text
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

// Register the custom plugin
ChartJS.register(centerTextPlugin);


// --- The Component ---
export function DoughnutChart({ data, options }) {
  // --- Default Data (used if no data prop is provided) ---
  const defaultData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        label: 'Tasks',
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',  // Teal
          'rgba(54, 162, 235, 0.8)', // Blue
          'rgba(255, 206, 86, 0.8)', // Yellow
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 8,
        // Custom property for our center text plugin
        centerText: 'Total: 100',
      },
    ],
  };

  // --- Default Options (used if no options prop is provided) ---
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows us to control the chart's height via CSS
    plugins: {
      title: {
        display: true,
        text: 'Project Status Overview',
        font: {
          size: 18,
          weight: 'bold',
          family: "'Segoe UI', 'Roboto', sans-serif"
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        },
        padding: 10,
        cornerRadius: 4,
        displayColors: true
      }
    },
    cutout: '65%', // Makes the doughnut hole larger
  };

  // Use provided props or fall back to defaults
  const chartData = data || defaultData;
  const chartOptions = options || defaultOptions;

  // --- Inline CSS for the chart container ---
  const chartWrapperCss = `
    .doughnut-chart-wrapper {
      position: relative;
      height: 450px;
      width: 100%;
      max-width: 450px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e0e0e0;
    }
  `;

  return (
    <>
      <style>{chartWrapperCss}</style>
      <div className="doughnut-chart-wrapper">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
}