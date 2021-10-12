const chapterTree = {
    name: '总章节',
    children: [{
            name: '章节一',
            children: [{
                name: '第一节',
                children: [{
                    name: '第一小节'
                }, {
                    name: '第二小节'
                }]
            }, {
                name: '第二节'
            }],
        },
        {
            name: '章节二',
            children: [{
                name: '第三节'
            }, {
                name: '第四节'
            }]
        },
    ],
};

serialize(chapterTree)
// ["总章节", "(1)章节一", "(1.1)第一节", "(1.1.1)第一小节", "(1.1.2)第二小节", "(1.2)第二节", "(2)章节二", "(2.1)第三节", "(2.2)第四节"]