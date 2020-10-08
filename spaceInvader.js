"use strict";

  let canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let context = canvas.getContext('2d');

drawline();

function drawline() {
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(500, 100);
    context.lineTo(500, 400);
    context.lineTo(200, 400);
    context.lineTo(200, 100);
    context.fill();
    context.stroke();

    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(220, 130);
    context.lineTo(270, 130);
    context.lineTo(270, 180);
    context.lineTo(220, 180);
    context.lineTo(220, 130);
    context.fill();
    context.stroke();

    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(480, 130);
    context.lineTo(430, 130);
    context.lineTo(430, 180);
    context.lineTo(480, 180);
    context.lineTo(480, 130);
    context.fill();
    context.stroke();

    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(325, 230);
    context.lineTo(375, 230);
    context.lineTo(375, 330);
    context.lineTo(325, 330);
    context.lineTo(325, 230);
    context.fill();
    context.stroke();

    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(220, 280);
    context.lineTo(270, 280);
    context.lineTo(270, 330);
    context.lineTo(325, 330);
    context.lineTo(325, 380);
    context.lineTo(220, 380);
    context.lineTo(220, 280);
    context.fill();
    context.stroke();

    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(480, 280);
    context.lineTo(430, 280);
    context.lineTo(430, 330);
    context.lineTo(375, 330);
    context.lineTo(375, 380);
    context.lineTo(480, 380);
    context.lineTo(480, 280);
    context.fill();
    context.stroke();
} 