// add-button押下時に発生させるイベントを定義
const onClickAdd = () => {
    // テキストを取得し初期化
    const textEl = document.getElementById("add-text");
    const text = textEl.value;

    textEl.value = "";

    // 新規に挿入するメモを生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;

    // 新規に挿入するボタンの生成と押した時のイベントを定義
    const button = document.createElement("button");
    button.textContent = "削除";

    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    // メモ整形
    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);

    // メモ追加
    document.getElementById("memo-list").appendChild(li);
};

// add-buttonにイベント付与
document.
getElementById("add-button").
addEventListener("click", () => onClickAdd());