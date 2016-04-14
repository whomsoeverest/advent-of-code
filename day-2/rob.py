import os.path
input_file = open(os.path.join(os.path.abspath(__file__ + '/../../inputs/'), 'day-2.txt'), 'r')


total_paper = 0
total_ribbon = 0
for line in input_file:
    l, w, h = tuple(map(int, line.strip().split('x')))
    surface_area = 2*l*w + 2*w*h + 2*h*l
    smallest_side = min(l*w, l*h, w*h)
    shortest_perimeter = min(2*(l+w), 2*(l+h), 2*(h+w))
    volume = l*w*h
    total_paper += surface_area + smallest_side
    total_ribbon += shortest_perimeter + volume
print(total_paper)
print(total_ribbon)