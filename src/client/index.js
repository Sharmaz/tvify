import $ from 'jquery'
import page from 'page'
import { getShows } from 'src/client/tvmaze-api'
import renderShows from 'src/client/render'
import $tvShowsContainer from 'src/client/tv-shows-container'

page('/', function (ctx, next) {
	if (!localStorage.shows) {
		getShows(function (shows) {
			$tvShowsContainer.find('.loader').remove()
         	localStorage.shows = JSON.stringify(shows)
        	renderShows(shows)
		})
     }
 	else {
     renderShows(JSON.parse(localStorage.shows))
	}
})

page()