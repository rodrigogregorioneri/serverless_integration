const handler = require( '../handler' );

test( 'a saudação correta é gerada' , () => {
   expect (handler.getLocalGreeting( "en" )).toBe( "Olá!" );
   expect (handler.getLocalGreeting( "fr" )).toBe( "🌊 " );
});