export class TrieNode<T> {
  children: { [key: string]: TrieNode<T> };
  values: T[];

  constructor() {
    this.children = {};
    this.values = [];
  }
}

export class Trie<T> {
  root: TrieNode<T>;

  constructor() {
    this.root = new TrieNode<T>();
  }

  insert(key: string, value: T): void {
    let node = this.root;
    const normalizedKey = key.toLowerCase(); // Normalize to lowercase for case-insensitive search

    for (const char of normalizedKey) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode<T>();
      }
      node = node.children[char];
      node.values.push(value); // Store the value at every node
    }
  }

  search(prefix: string): T[] {
    let node = this.root;
    const normalizedPrefix = prefix.toLowerCase(); // Normalize to lowercase for case-insensitive search

    for (const char of normalizedPrefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return node.values; // Return all values with the given prefix
  }
}
