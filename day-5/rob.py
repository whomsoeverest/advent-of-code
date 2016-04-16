from functools import reduce
import re
import os.path
input_file = open(os.path.join(os.path.abspath(__file__ + '/../../inputs/'), 'day-5.txt'), 'r')

def vowel_count(acc, c):
    if isinstance(acc, str):
        if acc in 'aeiou':
            acc = 1
        else:
            acc = 0
    if c in 'aeiou':
        acc += 1
    return acc


def is_nice(string):
    for bad in ['ab', 'cd', 'pq', 'xy']:
        if bad in string:
            return False
    if reduce(vowel_count, string) < 3:
        return False
    if not re.search(r'([a-z])\1', string):
        return False
    return True


def is_nice2(string):
    if not re.search(r'([a-z])([a-z])[a-z]*\1\2', string):
        return False
    if not re.search(r'([a-z])[a-z]\1', string):
        return False
    return True

nice_count = 0
nice2_count = 0
for line in input_file.readlines():
    if is_nice(line.strip()):
        nice_count += 1
    if is_nice2(line.strip()):
        nice2_count += 1
print(nice_count)
print(nice2_count)