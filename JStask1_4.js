'use strict';

const showTitle = () => {
    console.log('=====================\n現在持っているタスクの一覧\n=====================');
}

const tasks = [
    {
        genre: '掃除',
        content: '机を片付ける'
    },
    {
        genre: '買い物',
        content: '牛乳を買う'
    },
    {
        genre: '運動',
        content: '散歩をする'
    },
];

const listUp = () => {
    tasks.forEach((task, index) => {
    console.log(`${index} : [内容]${task.content}、[ジャンル]${task.genre}`);
});
}

showTitle();
listUp();

const addContent = prompt('タスクを入力してください');
const addGenre = prompt('ジャンルを入力してください');
alert('新しいタスクを追加しました');

tasks.push({genre: addGenre, content: addContent});

showTitle();
listUp();
