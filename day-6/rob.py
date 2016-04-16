from functools import reduce
import os.path
input_file = open(os.path.join(os.path.abspath(__file__ + '/../../inputs/'), 'day-6.txt'), 'r')


class LightGrid:

    grid = None
    SIZE = 1000

    def __init__(self):
        self.grid = [False] * self.SIZE * self.SIZE

    def do(self, instruction):
        what = self.parse_instruction(instruction)
        where = self.get_all_points(what['point_start'], what['point_end'])
        for point in where:
            if what['action'] == 'toggle':
                self.toggle_state(point)
            else:
                self.set_state(point, what['action'] == 'on')

    def lit_count(self):
        return reduce(lambda x, y: x+y, self.grid)

    def toggle_state(self, point):
        self.set_state(point, not self.grid[point])

    def set_state(self, point, state):
        self.grid[point] = state

    def parse_instruction(self, instruction):
        instruction = instruction.replace('turn ', '').strip().split()
        action = instruction[0]
        return {
            'action': action,
            'point_start': tuple(map(int, instruction[1].split(','))),
            'point_end': tuple(map(int, instruction[3].split(','))),
        }

    def get_all_points(self, point_start, point_end):
        x_start, y_start = point_start
        x_end, y_end = point_end
        points = []
        for x in range(x_start, x_end+1):
            for y in range(y_start, y_end+1):
                points.append(x+y*self.SIZE)
        return points

class LightGrid2(LightGrid):

    def __init__(self):
        self.grid = [0] * self.SIZE * self.SIZE

    def do(self, instruction):
        what = self.parse_instruction(instruction)
        where = self.get_all_points(what['point_start'], what['point_end'])
        for point in where:
            if what['action'] == 'toggle':
                adjustment = 2
            if what['action'] == 'on':
                adjustment = 1
            if what['action'] == 'off':
                adjustment = -1
            self.set_brightness(point, adjustment)

    def set_brightness(self, point, adjustment):
        self.grid[point] = max(self.grid[point] + adjustment, 0)

lg = LightGrid()
lg2 = LightGrid2()

for line in input_file.readlines():
    lg.do(line.strip())
    lg2.do(line.strip())
print(lg.lit_count())
print(lg2.lit_count())

