'use strict';

const showTitle = () => {
    console.log('=====================');
    console.log('現在持っているタスクの一覧');
    console.log('=====================');
}

const tasks = {
    '机を片付ける':'掃除',
    '牛乳を買う':'買い物',
    '散歩する':'運動',

};

const listUp = () => {
    const entries = Object.entries(tasks);

        entries.forEach((prop, index) => {
            console.log(`${index} : [内容]${prop[0]}、[ジャンル]${prop[1]}`);
});
}

showTitle();
listUp();

tasks[prompt('タスクを入力してください')] = prompt('ジャンルを入力してください');
alert('新しいタスクを追加しました');

showTitle();
listUp();
