$('.container').append(
	$('<button>', {
		class: 'button',
		text: 'Кнопка',
	})
)

$('.button').click(() => console.log('click'))
