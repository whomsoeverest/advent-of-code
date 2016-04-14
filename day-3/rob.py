import os.path
input_file = open(os.path.join(os.path.abspath(__file__ + '/../../inputs/'), 'day-3.txt'), 'r')


class SantaGrid:
    x = 0
    y = 0
    rx = 0
    ry = 0
    robo = False
    robo_turn = False

    def __init__(self, robo=False):
        self.visited = {}
        self._deliver()
        self.robo = robo
        if robo:
            self._deliver()

    def move(self, direction):
        if direction == '^':
            if not self.robo or not self.robo_turn:
                self.y += 1
            else:
                self.ry += 1
        if direction == 'v':
            if not self.robo or not self.robo_turn:
                self.y -= 1
            else:
                self.ry -= 1
        if direction == '>':
            if not self.robo or not self.robo_turn:
                self.x += 1
            else:
                self.rx += 1
        if direction == '<':
            if not self.robo or not self.robo_turn:
                self.x -= 1
            else:
                self.rx -= 1
        self._deliver()
        self.robo_turn = not self.robo_turn

    def _deliver(self):
        k = '%s, %s' % (self.x, self.y)
        if self.robo:
            if self.robo_turn:
                k = '%s, %s' % (self.rx, self.ry)
        self.visited[k] = self.visited.get(k,0) + 1

sg = SantaGrid()
sg_robot = SantaGrid(True)
for direction in input_file.read():
    sg.move(direction)
    sg_robot.move(direction)

print("Houses visited", len(sg.visited))  # 2592
print("Houses visited with A FUCKIN ROBOT", len(sg_robot.visited))  # 2360
