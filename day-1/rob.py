import os.path
input_file = open(os.path.join(os.path.abspath(__file__ + '/../../inputs/'), 'day-1.txt'), 'r')

floor = 0
pos=1
for d in input_file.read():
    if d == '(':
        floor += 1
    if d == ')':
        floor -= 1
    if floor == -1:
        print("That fucker went into the basement at instruction #",pos,sep='')
    pos += 1
print("Santa, go the fuck to floor #", floor, sep='')