import random as _r
import string as _s

achars = _s.printable
chars = []
for x in range(len(achars)):
    chars.append(achars[x])
_r.shuffle(chars)

def makelist(value, type):
    list = []
    for x in range(value):
        if type == "int":
            list.append(x)
        elif type == "string":
            list.append(str(x))
        else:
            raise TypeError(f"ERROR: %d IS NOT A VALID TYPE" % type)
    return list

def rvalue(length):
    value = ""
    for x in range(length):
        if _r.randint(1,3) == 1:
            value += _r.choice(chars)
