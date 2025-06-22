

let input = prompt('コマンドを入力してください(new, List, delete, quit)');
const todos = ['水やりをする',  '掃除をする'];
while(input !== 'quit'  && input !== 'q') {
    if(input === 'List') {
        console.log('*********************');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*********************')
    } else if (input === 'new') {
        const newTodo = prompt('新しいTodoを入力してください');
        todos.push(newTodo);
        console.log(`「${newTodo}を追加しました`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('削除するインデックスを入力してください'));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(` 「${deleted[0]}」を削除しました`);
        } else {
            console.log('有効なインデックスを入力してください')
        }
        
    }
    input = prompt('コマンドを入力してください (new, List, delete, quit)');
}
console.log('アプリを終了しました');















