class Day1
  def initialize()
    @input = File.read( "input.txt" )
    @numbers = @input.split( // )
    @len = @numbers.length
  end

  def part1()
    total = 0
    for x in 0..@len
      y = if x == @len - 1 then 0 else x + 1 end

      if @numbers[x] == @numbers[y]
        total += @numbers[x].to_i
      end
    end

    total
  end

  def part2()
    total = 0
    halfway = @len / 2
    for x in 0..@len
      y = x + halfway
      if y > @len
        y = y - @len
      end

      if @numbers[x] == @numbers[y]
        total += @numbers[x].to_i
      end
    end

    total
  end
end

day = Day1.new
puts "Day 1 Part 1 "
puts day.part1
puts "Day 1 Part 2"
puts day.part2