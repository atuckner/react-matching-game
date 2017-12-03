import shuffleArray from './shuffle';

function generateCards() {
  let cards = ['sun-o', 'tree', 'leaf', 'key', 'globe', 'flash', 'anchor', 'camera-retro'].reduce((result, current) => {
    return result.concat([{icon: current, selected: false, matched: false}, {icon: current, selected: false, matched: false}]);
  }, []);

  return shuffleArray(cards);
}

export default generateCards;
