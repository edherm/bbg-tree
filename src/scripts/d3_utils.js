const klass = d => {
  if (d.data.name.commonName) {
    return `leaves leaf${d.parent.parent.id}${d.parent.id}${d.id}`;
  } else if (d.depth === 4) {
    return "upper branches";
  } else if (d.depth === 3) {
    return "middle branches";
  } else if (d.depth === 2) {
    return "lower branches";
  } else {
    return "trunk";
  }
};

const onMouseOver = d => {
  if (d.depth === 4) {
    // console.log(d);
  }
};

const onMouseOut = d => {
  if (d.depth === 4) {
    // console.log("goodbye");
  }
};

// Handle click - set visibility
const click = d => {
  if (d.depth === 4) {
    // console.log(d);
    // displaySpecs(d);
  } else if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}

const diagonal = (start, delta) => {
  return `M ${start.y} ${start.x} 
            C ${(start.y + delta.y) / 2} ${start.x},
            ${(start.y + delta.y) / 2} ${delta.x},
            ${delta.y} ${delta.x}`;
};

module.exports = {klass, onMouseOver, onMouseOut, click, diagonal}