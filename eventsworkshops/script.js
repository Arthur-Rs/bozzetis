const calendar = new Calendar(
	'calendarContainer',
	'small',
	[ 'Sábado', 3 ],
	[ '#292f63', '#2a3166', '#f1f1f1', '#9ba4d3' ],
	{
		days: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
		months: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],

		indicator: true,
		indicator_type: 1,
		indicator_pos: 'bottom',
		placeholder: '<span>Custom Placeholder</span>'
	}
);
