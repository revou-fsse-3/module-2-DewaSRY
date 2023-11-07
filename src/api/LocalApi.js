/**
 * @type {{
 * getAllNodes:()=>void,
 * saveNode:(NodeToSave:Object)=>void,
 * deleteNode :(id:string)=>void
 * }}
 */
export default class LocalApi {
  constructor(key) {
    this.key = key;
    this.collection = [];
  }
  getAllNodes() {
    if (this.collection.length <= 0) {
      this.collection = JSON.parse(localStorage.getItem(this.key) || "[]");
    }
    return this.collection.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  saveNode(NodeToSave) {
    const Nodes = this.getAllNodes();
    const existing = Nodes.find((Node) => Node.id == NodeToSave.id);
    // Edit/Update
    if (existing) {
      existing.title = NodeToSave.title;
      existing.body = NodeToSave.body;
      existing.updated = new Date().toISOString();
    } else {
      NodeToSave.id = Math.floor(Math.random() * 1000000 * 7);
      NodeToSave.updated = new Date().toISOString();
      Nodes.push(NodeToSave);
    }
    localStorage.setItem(this.key, JSON.stringify(Nodes));
    return NodeToSave.id;
  }

  deleteNode(id) {
    const Nodes = this.getAllNodes();
    const newNodes = Nodes.filter((Node) => Node.id != id);
    localStorage.setItem(this.key, JSON.stringify(newNodes));
    return id;
  }
}
