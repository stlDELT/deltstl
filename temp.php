<?php
/**
*Template Name: Software List
*/

get_header();
?>
<div class="menuheight"></div>
<span class="center">
	<!-- <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
	<!-- Standard Post -->
	<div class="adsense">
		<ins class="adsbygoogle"
			 style="display:block"
			 data-ad-client="ca-pub-2865102075340904"
			 data-ad-slot="8510534393"
			 data-ad-format="auto"></ins>
	</div>
</span>
<div class="postmenu">

	<div class="leftinfo">
		<h4>share:</h4>
		<?php echo do_shortcode('[easy-social-share buttons="facebook,twitter,stumbleupon,pinterest,flipboard" counters=1 counter_pos="hidden" total_counter_pos="rightbig" style="icon" template="11" point_type="simple"]'); ?>
	</div>

	<div class="rightinfo">
		<h4> <a href="https://creativesfeed.com/contact/submit-your-software/">SubmiT YOUR SOFTWARE</a> </h4>
	</div>
</div>


<div class="hometitle softlisted inner center">
	<h1 style="margin-bottom: 10px"><?php the_title(); ?></h1>
	<?php the_field( 'page_description' ); ?>
</div>

<div class="container inner featuredlist">
	<h2 style="font-size: 23px;line-height:30px">Featured <?php the_title(); ?></h2>
	<?php the_field( 'description' ); ?>
</div>
<div class="center">

	<div class="adsense">
		<ins class="adsbygoogle"
			 style="display:block"
			 data-ad-client="ca-pub-2865102075340904"
			 data-ad-slot="8510534393"
			 data-ad-format="auto"></ins>
	</div>
</div>

<div class="container inner warelist">
	<h2 style="font-size: 23px;line-height:30px">More <?php the_title(); ?></h2>
	<?php the_field( 'moreiption' ); ?>
</div>



<div class="container">
    <div class="softbuttons" style="display: <?php the_field( 'nono' ); ?>">
        <a href="<?php the_field( 'blistlink' ); ?>">
                <div class="lngbtn">
                    <h2 class="head4"><?php the_field( 'blist' ); ?></h2>
                </div>
            </a>
    </div>
    <div class="softbuttons" style="width: <?php the_field( 'width' ); ?>">
        <a href="<?php the_field( 'https://creativesfeed.com/contact/submit-your-software/' ); ?>">
                <div class="lngbtn">
                    <h2 class="head4">Add Your Software for Free!</h2>
                </div>
            </a>
    </div>
</div>

<div class="bottompost1">
	<div class="sb50"></div>
	<div class="shareme">
		<h3><span>Share This Page</span></h3>
		<?php echo do_shortcode('[easy-social-share buttons="facebook,twitter,stumbleupon,pinterest,flipboard,digg" counters=1 counter_pos="hidden" total_counter_pos="rightbig" style="icon" template="11" point_type="simple"]'); ?>
	</div>

	<div class="sb50"></div>

	<div class="row">
		<div class="col-sm-3">
			<h4>recent software reviews</h4>
		</div>
		<div class="col-sm-9">
			<div class="row eq">
				<?php
				// Default arguments
				$args = array(
					'posts_per_page' => 4, // How many items to display
					'post__not_in'   => array( get_the_ID() ), // Exclude current post
					'no_found_rows'  => true, // We don't ned pagination so this speeds up the query
					'cat' => '37'
				);

				// Check for current post category and add tax_query to the query arguments
				$cats = wp_get_post_terms( get_the_ID(), 'category' );
				$cats_ids = array();
				foreach( $cats as $wpex_related_cat ) {
					$cats_ids[] = $wpex_related_cat->term_id;
				}
				if ( ! empty( $cats_ids ) ) {
					$args['category__in'] = $cats_ids;
				}

				// Query posts
				$wpex_query = new wp_query( $args );

				// Loop through posts
				foreach( $wpex_query->posts as $post ) : setup_postdata( $post ); ?>
				<div class="col-sm-6">
					<a href="<?php the_permalink(); ?>">
						<div class="card">
							<?php echo srcset_post_thumbnail('col-4'); ?>
							<div class="go">
							</div>
							<div class="cardinfo">
								<h2><?php the_title(); ?></h2>
								<b><?php the_time( 'm/d/y' ); ?></b>
							</div>
						</div>
					</a>
				</div>
				<?php
				endforeach;
				wp_reset_postdata(); ?>
			</div>
		</div>
	</div>

	<div class="btmbrdr"></div>

	<div class="row">
		<div class="col-sm-3">
			<h4>some sponsors</h4>
		</div>
		<div class="col-sm-9">
			<!-- <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
			<!-- Standard Post -->
			<div class="adsense">
				<ins class="adsbygoogle"
					 style="display:block"
					 data-ad-client="ca-pub-2865102075340904"
					 data-ad-slot="8510534393"
					 data-ad-format="auto"></ins>
			</div>
		</div>
	</div>

</div>



<?php get_footer(); ?>
<style>@media (min-width:0px) and (max-width:450px){.smlmenu{position: relative;}.hometitle {padding: 40px 0px 30px;}}

	.essb-subscribe-form-content.essb-subscribe-from-design1{border-top:0 solid #f05a28}.essb-subscribe-form-content.essb-subscribe-from-design1 h4,.essb-subscribe-form-content.essb-subscribe-from-design1 p{display:none}.essb-subscribe-form-content.essb-subscribe-from-design1 input.submit{background:#03fc96;color:#1c1e2c;border-bottom:0;border-radius:0;font-weight:500;}.essb-subscribe-form-content.essb-subscribe-from-design1 input.submit:hover{background:#08d17f}.featured img{width:100%;object-fit:cover;height:100%;opacity:.8}.featured{background:#000}.post_title h1{color:#03fc96}
	.sidebar_main .inspire img{height:145px;object-fit:cover}.sidebar_main .width100{width:100%!important;height:200px!important}.sidebar_main .spirebar{height:740px;margin-top:50px}.essb-subscribe-form-content.essb-subscribe-from-design1 .essb-subscribe-form-result-message{color:#000}.essb-subscribe-form-content.essb-subscribe-from-design1{background-color: transparent;}.essb-subscribe-form-content.essb-subscribe-from-design1 {padding: 0px;}.essb-subscribe-form-content.essb-subscribe-from-design1 input {font-size: 12px;}
	.content_cards_card {
		background-color: white;
		border: 1px solid;
		border-color: #e9eaed #dadada #ccc;
		padding: 3px;
		margin-bottom: 20px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		width: 30%;
		float: left;
		margin-right: 44px;
		height: 400px;
		margin-bottom: 40px;
		position: relative;
	}
	.content_cards_card .content_cards_description {
		font-size: 14px;
		line-height: 1.5;
		color: #141412;
		margin: 7px 15px 10px 15px;
	}
	.content_cards_card .content_cards_image img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
		height: 200px;
		object-fit: cover;
		width: 100%;
		margin-bottom: 20px;
	}
	.content_cards_card .content_cards_site_name {
		font-style: italic;
		font-size: 12px;
		line-height: 1.5;
		text-transform: uppercase;
		color: #9197a3;
		text-align: right;
		margin: 10px 15px;
		position: absolute;
		font-size: 0px;
		right: 0;
		bottom: 0;
	}
	.warelist .content_cards_card {
		margin-bottom: 0px;
		width: 46%;
		float: left;
		margin-right: 44px;
		height: 130px;
		margin-bottom: 40px;
		position: relative;
	}
	.warelist .content_cards_card .content_cards_image img {
		height: 70px;
		object-fit: cover;
		width: 100%;
		margin-bottom: 20px;
		float: left;
		margin-right: 10px;
		width: 70px;
		margin-top: 18px;
		margin-left: 18px;
	}
	.warelist .content_cards_card .content_cards_site_name {
		display: none;
	}
</style>

<script>
	$(function(){$(window).scroll(function(){$(window).scrollTop()>=190?$(".postmenu").addClass("godown"):$(".postmenu").removeClass("godown")})});
</script>
