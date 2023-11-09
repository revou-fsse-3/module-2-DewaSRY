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
  getNode(id) {
    return this.collection.find((i) => i.id === id);
  }
  saveNode(NodeToSave) {
    // if (this.collection.length <= 0) return -1;
    const existing = this.collection.find((Node) => Node.id == NodeToSave.id);
    // Edit/Update
    if (existing) {
      existing.title = NodeToSave.title;
      existing.body = NodeToSave.body;
      existing.updated = new Date().toISOString();
    } else {
      NodeToSave.id = Math.floor(Math.random() * 1000000 * 7);
      NodeToSave.updated = new Date().toISOString();
      this.collection.push(NodeToSave);
    }
    localStorage.setItem(this.key, JSON.stringify(this.collection));
    return NodeToSave.id;
  }

  deleteNode(id) {
    if (this.collection.length <= 0) return -1;
    this.collection = this.collection.filter((Node) => Node.id != id);
    localStorage.setItem(this.key, JSON.stringify(this.collection));
    return id;
  }
}
