class Day2

  def part1()
    total = 0

    File.open("input.txt").each do |line|
      split_lines = line.split(/\s+/).collect &:to_i
      total += (split_lines.max - split_lines.min)
    end

    total
  end

  def part2()
    total = 0

    File.open("input.txt").each do |line|
      split_lines = line.split(/\s+/).collect &:to_i

      divs = []
      split_lines.each do |num|
        other = split_lines.detect do |next_num|
          vals = [ next_num, num ]
          next_num != num && vals.max % vals.min == 0
        end
        if other
          divs = [ num, other ]
          break
        end
      end

      total += (divs.max / divs.min)
    end

    total
  end
end

day = Day2.new
puts "Day 2 Part 1 "
puts day.part1
puts "Day 2 Part 2 "
puts day.part2