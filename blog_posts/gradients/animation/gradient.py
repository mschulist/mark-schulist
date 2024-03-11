from manim import *

class gradient(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(phi=0.35 * PI)
        r3 = ThreeDAxes(
            x_range=[-1, 1, 0.01],
            y_range=[-1, 1, 0.01],
            z_range=[-1, 1, 0.01],
            x_length=6,
            y_length=6,
            z_length=4,
            axis_config={"include_tip": False,
                            "include_ticks": False},
        )
        def f(x, y):
            return x**2 + y**2 - 1
        fsurface = Surface(
            lambda u, v: r3.c2p(u, v, f(u, v)),
            resolution=(16, 16),
            u_range=[-1, 1],
            v_range=[-1, 1],
            fill_opacity=0.35,
            fill_color=BLUE,
        )

        self.add(r3)
        self.add(fsurface)

        self.begin_ambient_camera_rotation(rate=0.2)

        def gradient(f, x, y, h = 1e-6):
            x_partial = (f(x+h, y) - f(x, y))/h
            y_partial = (f(x, y+h) - f(x, y))/h
            return [x_partial, y_partial]

        def move_x_y_to_min(f, x, y, learning_rate):
            x_p, y_p = gradient(f, x, y)
            x_move = x - learning_rate * x_p
            y_move = y - learning_rate * y_p
            return [x_move, y_move]
        
        x, y = 1, 1 # "arbitrary" starting values

        x_vals = [x]
        y_vals = [y]
        learning_rate = 0.018
        for i in range(200):
            x, y = move_x_y_to_min(f, x, y, learning_rate)
            x_vals.append(x)
            y_vals.append(y)


        dot = Sphere(r3.c2p(x_vals[0], y_vals[0]), radius=0.1).set_color(RED)
        self.add(dot)
        self.wait(0.1)

        for i in range(len(x_vals)):
            dot.move_to(r3.c2p(x_vals[i], y_vals[i], f(x_vals[i], y_vals[i])))
            self.add(dot)
            self.wait(0.05)
