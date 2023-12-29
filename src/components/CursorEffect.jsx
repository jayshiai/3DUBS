
import React, { useEffect, useRef } from 'react';
import {
  Polyline,
  Renderer,
  Transform,
  Geometry,
  Program,
  Mesh,
  Vec3,
  Vec2,
  Color
} from "ogl";

const CursorEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const initOGL = () => {
        const vertexShader = `
        attribute vec3 position;
        attribute vec3 next;
        attribute vec3 prev;
        attribute vec2 uv;
        attribute float side;

        uniform vec2 uResolution;
        uniform float uDPR;
        uniform float uThickness;

        vec4 getPosition() {
            vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
            vec2 nextScreen = next.xy * aspect;
            vec2 prevScreen = prev.xy * aspect;

            vec2 tangent = normalize(nextScreen - prevScreen);
            vec2 normal = vec2(-tangent.y, tangent.x);
            normal /= aspect;
            normal *= 1.0 - pow(abs(uv.y - 0.5) * 1.9, 2.0);

            float pixelWidth = 1.0 / (uResolution.y / uDPR);
            normal *= pixelWidth * uThickness;

            // When the points are on top of each other, shrink the line to avoid artifacts.
            float dist = length(nextScreen - prevScreen);
            normal *= smoothstep(0.0, 0.02, dist);

            vec4 current = vec4(position, 1);
            current.xy -= normal * side;
            return current;
        }

        void main() {
            gl_Position = getPosition();
        }
        `;
  
        const renderer = new Renderer({ dpr: 2, alpha: true }); 
        const gl = renderer.gl;
        canvasRef.current.appendChild(gl.canvas);
        gl.clearColor(0.9, 0.9, 0.9, 0);
  
        const scene = new Transform();
        const lines = [];
  
        function resize() {
          renderer.setSize(window.innerWidth, window.innerHeight);
          lines.forEach(line => line.polyline.resize());
        }
        window.addEventListener('resize', resize, false);
  
        function random(a, b) {
          const alpha = Math.random();
          return a * (1.0 - alpha) + b * alpha;
        }
  
        ["#e09f7d", "#ef5d60", "#ec4067", "#a01a7d", "#311847"].forEach(
          (color, i) => {
            const line = {
              spring: random(0.02, 0.1),
              friction: random(0.7, 0.95),
              mouseVelocity: new Vec3(),
              mouseOffset: new Vec3(random(-1, 1) * 0.02)
            };
  
            const count = 20;
            const points = (line.points = []);
            for (let i = 0; i < count; i++) points.push(new Vec3());
  
            line.polyline = new Polyline(gl, {
              points,
              vertex: vertexShader,
              uniforms: {
                uColor: { value: new Color(color) },
                uThickness: { value: random(20, 50) }
              }
            });
  
            line.polyline.mesh.setParent(scene);
            lines.push(line);
          }
        );
  
        resize();
  
        const mouse = new Vec3();
        if ('ontouchstart' in window) {
          window.addEventListener('touchstart', updateMouse, false);
          window.addEventListener('touchmove', updateMouse, false);
        } else {
          window.addEventListener('mousemove', updateMouse, false);
        }
  
        function updateMouse(e) {
          if (e.changedTouches && e.changedTouches.length) {
            e.x = e.changedTouches[0].pageX;
            e.y = e.changedTouches[0].pageY;
          }
          if (e.x === undefined) {
            e.x = e.pageX;
            e.y = e.pageY;
          }
  
          mouse.set(
            (e.x / gl.renderer.width) * 2 - 1,
            (e.y / gl.renderer.height) * -2 + 1,
            0
          );
        }
  
        const tmp = new Vec3();
  
        requestAnimationFrame(update);
        function update(t) {
          requestAnimationFrame(update);
  
          lines.forEach(line => {
            for (let i = line.points.length - 1; i >= 0; i--) {
              if (!i) {
                tmp
                  .copy(mouse)
                  .add(line.mouseOffset)
                  .sub(line.points[i])
                  .multiply(line.spring);
                line.mouseVelocity.add(tmp).multiply(line.friction);
                line.points[i].add(line.mouseVelocity);
              } else {
                line.points[i].lerp(line.points[i - 1], 0.9);
              }
            }
            line.polyline.updateGeometry();
          });
  
          renderer.render({ scene });
        }
      };
  
      initOGL();
    }, []);
  
  return (
    <div ref={canvasRef} className="fixed top-0 left-0 -z-[5]"></div>
  )
}

export default CursorEffect