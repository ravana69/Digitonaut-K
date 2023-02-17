// RGBA.js - super tiny webgl/fragment shader lib

//  simplest example

// there are three uniforms added by library code:

//  uniform vec2 resolution; // screen resolution
//  uniform float time; // frame time in seconds

RGBA(`
    vec2 uv = gl_FragCoord.xy/resolution - 0.5;
    uv.x *= resolution.x/resolution.y;
    
    float st = sin(time*0.31);
    float ct = cos(time*0.47);

    for (float i=0.; i<9.; i++) {
        uv = abs(uv) / dot(uv, uv) 
            - ct * st 
            - 1.;
        uv = uv * mat2(ct, st, -st, ct);
    }

    gl_FragColor = vec4(uv, uv.x/uv.y, 1.);
`)