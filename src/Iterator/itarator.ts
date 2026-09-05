// イテレータの共通インターフェース
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// コレクションの共通規格
export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// 管理対象のデータ型
export interface Book {
  title: string;
  author: string;
}

// 具体的なコレクション(implementsをする)
export class BookShelf implements IterableCollection<Book> {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookAt(index: number): Book {
    return this.books[index];
  }

  public getLength(): number {
    return this.books.length;
  }
  public createIterator(): Iterator<Book> {
    return new BookShelfIterator(this);
  }
}

// 具体的なイテレーター
export class BookShelfIterator implements Iterator<Book> {
  private index: number = 0;

  constructor(private bookShelf: BookShelf){}

  public hasNext(): boolean {
    return this.index < this.bookShelf.getLength();
  }

  public next(): Book {
    if (!this.hasNext()) {
      throw new Error('これ以上要素が存在しません');
    }
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}