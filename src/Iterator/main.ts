import { Book, BookShelf , Iterator} from "./itarator";


const bookShelf = new BookShelf();
bookShelf.addBook({ title: 'Design Patterns', author: 'GoF' });
bookShelf.addBook({ title: 'Refactoring', author: 'Martin Fowler' });
bookShelf.addBook({ title: 'Clean Code', author: 'Robert C. Martin' });

console.log('=== Iterator を使った要素の順次取り出し ===');

// ① イテレーターの取得（内部構造は隠蔽されている）
const iterator: Iterator<Book> = bookShelf.createIterator();

// ② 共通の手段（hasNext / next）だけで繰り返し処理を実行
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(`📖 『${book.title}』 (著: ${book.author})`);
}
