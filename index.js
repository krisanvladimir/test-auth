let firstname = document.querySelector('.form-control'),
    secondname = document.querySelector('#inputNameSecond'),
    typePass = document.querySelector('#typePass'),
    friendBlock = document.querySelector('.friendBlock'),
    select = document.querySelectorAll('select')[0],
    friend = document.querySelector('.friendly'),
    nameme = document.querySelector('.nameme'),
    nameFriend = document.querySelector('.nameFriend'),
    ageFriend = document.querySelector('.ageFriend'),
    h5 = document.createElement('h5'),
    name1 = document.querySelector('#inputNameFriend'),
    age = document.querySelector('#inputNameAgeFriend'),
    datanet = document.querySelector('.datanet'),
    datame = document.querySelector('.datame'),
    commentup = document.querySelector('#textarea'),
    comment = document.querySelector('.comment');

function append(context, name) {
    name.onchange = function() {
        context.appendChild(h5.appendChild(document.createTextNode(name.value)));
    };
}

append(nameFriend, name1);
    append(ageFriend, age);
    append(datame, datanet);
    append(comment, commentup);
   
firstname.onchange = function() {
    secondname.value = firstname.value;
    nameme.appendChild(h5.appendChild(document.createTextNode(firstname.value)));
};

select.onchange = function() {
    let indexSelected = select.selectedIndex,
        option = select.querySelectorAll('option')[indexSelected],
        selectId = option.getAttribute('id');
        
    if (selectId == '1') {friendBlock.style.display = 'none';}
    else if (selectId == '2') {friendBlock.style.display = 'block'; friend.style.display = 'block';}
};






 





