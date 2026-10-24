const moodNotes = {
	sunny: 'その調子。うれしいことを、ひとつ味わっていこう。',
	steady: 'まあまあの日もいい日。小さな楽しみを探してみよう。',
	rest: '今日はゆっくりで大丈夫。休むのも、いい日のつくり方。'
};

const moodButtons = document.querySelectorAll('.mood-button');
const moodMessage = document.querySelector('#mood-message');

moodButtons.forEach((button) => {
	button.addEventListener('click', () => {
		moodButtons.forEach((option) => {
			option.setAttribute('aria-pressed', String(option === button));
		});

		moodMessage.textContent = moodNotes[button.dataset.mood];
	});
});

