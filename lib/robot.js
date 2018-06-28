const direction = ['north', 'east', 'south', 'west'];

class Robot {
	//your solution here


  constructor () {
    this.coordinates =[0,0];
    this.bearing = 'north';
  }

  setCoordinates (x,y) {
    return this.coordinates = [x,y];
  }

  setBearing (magn) {
    if (direction.includes(magn.toLowerCase())) {
      return this.bearing = magn.toLowerCase()
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place (robotObject) {
    this.coordinates[0] = robotObject['x'];
    this.coordinates[1] = robotObject['y'];
    this.bearing = robotObject['direction'];
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    }
    else if (this.bearing === 'east') {
      this.bearing = 'south'
    }
    else if (this.bearing === 'south') {
      this.bearing = 'west'
    }
    else if (this.bearing === 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    }
    else if (this.bearing === 'west') {
      this.bearing = 'south'
    }
    else if (this.bearing === 'south') {
      this.bearing = 'east'
    }
    else if (this.bearing === 'east') {
      this.bearing = 'north'
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    }
    else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    }
    else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    }
    else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(string) {
    const instruct = string.toUpperCase();
    const instructions = instruct.split('');
    for(let counter = 0; counter < instructions.length; counter++) {
      if (instructions[counter] === 'L') {
        this.turnLeft();
      }
      else if (instructions[counter] === 'R') {
        this.turnRight();
      }
      else if (instructions[counter] === 'A') {
        this.advance();
      }
    }
  }

}
