class Game {
  play(action: string): string {
    switch (action) {
      case 'start':
        // Code to start the game
        return 'Game started';
      case 'pause':
        // Code to pause the game
        return 'Game paused';
      case 'end':
        // Code to end the game
        return 'Game ended';
      default:
        throw new Error('Invalid action');
    }
  }
}
