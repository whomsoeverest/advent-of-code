import hashlib

key = 'yzbqklnj'

num = 0
while hashlib.md5((key + str(num)).encode('utf-8')).hexdigest()[:5] != '00000':
    num += 1

print("Santa's first buttcoin found at %s" % num)

num = 0
while hashlib.md5((key + str(num)).encode('utf-8')).hexdigest()[:6] != '000000':
    num += 1

print("Santa's second buttcoin found at %s, DOWN WITH FIAT CURRENCY SHEEPLE" % num)