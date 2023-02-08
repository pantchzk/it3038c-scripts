import random

Num = random.randint(1, 100)

print('Guess a number between 1 and 100')

Guess = input()

try:
  while int(Guess) != Num:

    while int(Guess) < Num:
      print()
      print(Guess + ' was too low! Guess again')
      Guess = input()

    while int(Guess) > Num:
      print()
      print(Guess + ' was too high! Guess again')
      Guess = input()

except:
  print ('You did not put a number!')

if int(Guess) == Num:
  print('You guessed correctly! The number was ' + str(Num))
