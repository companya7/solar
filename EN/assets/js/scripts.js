$(document).ready(function(){
	
    // Menu (Desktop)
    window.onscroll = function() {
        scrollFunction()
    };
    var first = true;
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("navbar").classList.add('fixed-navbar');
        } else if (document.body.scrollTop == 0 && document.documentElement.scrollTop == 0) {
            document.getElementById("navbar").classList.remove('fixed-navbar');
        }
    }

    // Menu dropdown
    $('.sobre').click(function() {
        $('#linksinternos').slideToggle('1000');
        $("i", this).toggleClass("fa-caret-up fa-caret-down");
    });

    // InputMask
    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };
    $('#telefone').mask(behavior, options);


    // Formulário de contato
    $("#form-contato").submit( function(event){
        event.preventDefault();
        $.ajax({
            type: 'post',
            url: base_url + "enviacontato",
            data: $('#form-contato').serialize(),
            beforeSend: function(data){
                $('#form-contato').hide();
                $('#msg-status-faleconosco').html('Enviando. Aguarde.');
                $('#msg-status-faleconosco').show();
            },
            success: function (data) {
                if(data == 'ok'){
                    $('#msg-status-faleconosco').html('Sua mensagem foi encaminhada com sucesso!<br>Em breve, lhe retornaremos.');
                }else{
                    $('#msg-status-faleconosco').html(data);
                    $('#msg-status-faleconosco').show();
                    $('#form-contato').show();
                    setTimeout(function(){
                        $('#msg-status-faleconosco').hide();
                    },5000);
                }
            },
            error: function(){
                $('#form-contato').show();
                alert('Erro ao enviar os dados. Tente novamente.');
            }
        });
    });

    // Efeito de exibir o conteudo.
    new WOW().init();

    // Backrgound em movimento
    particlesJS("vantagens", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#D3D3D3"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    // "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#D3D3D3",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});


if (window.location.href == 'http://172.20.4.207/desenvolvimento/solarlivre/') {
    const btn = document.getElementById('mute'),
          video = document.getElementById('bgvid');

    btn.addEventListener('click', () => {
        if (btn.value === 'unmuted') {
            btn.value = 'muted';
            btn.innerHTML = 'Ativar áudio';
            video.muted = true;
        } else {
            btn.value = 'unmuted';
            btn.innerHTML = 'Desativar áudio';
            video.muted = false;
        }
    });
}


//Slick Slide
$(document).ready(function(){
    $('.produto').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.logos'
    });
});

$('.logos').slick({
    asNavFor: '.produto',
    focusOnSelect: true,
    variableWidth: true,
    infinite: false,
});



//OwlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:20,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        }
    }
})


// Mapa Interativo JS
google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

dicEstados = {
    '1' : 'Acre',
    '2' : 'Alagoas',
    '3' : 'Amapa',
    '4' : 'Amazonas',
    '5' : 'Bahia',
    '6' : 'Ceara',
    '7' : 'Distrito Federal',
    '8' : 'Espirito Santo',
    '9' : 'Goias',
    '10' : 'Maranhao',
    '11' : 'Mato Grosso',
    '12' : 'Mato Grosso do Sul',
    '13' : 'Minas Gerais',
    '14' : 'Para',
    '15' : 'Paraiba',
    '16' : 'Parana',
    '17' : 'Pernambuco',
    '18' : 'Piaui',
    '19' : 'Rio de Janeiro',
    '20' : 'Rio Grande do Norte',
    '21' : 'Rio Grande do Sul',
    '22' : 'Rondonia',
    '23' : 'Roraima',
    '24' : 'Santa Catarina',
    '25' : 'Sao Paulo',
    '26' : 'Sergipe',
    '27' : 'Tocantins'
}

unidades = {
    'Acre': 
    {
        // '0' : 
        // {
            // 'Franquia' : 'Cruzeiro do Sul',
            // 'Cidade' : 'Cruzeiro do Sul/AC',
            // 'Fone' : '(68) 9 9963-6350',
            // 'Endereco' : 'R. Germano Franck, 4501 - Arthur Maia',
            // 'WhatsApp' : '68999636350',
            // 'Email' : ''
        // },
    },
    'Alagoas':
    {
        '0' : 
        // {
            // 'Franquia' : 'Arapiraca',
            // 'Cidade' : 'Arapiraca/AL',
            // 'Fone' : '(82) 3521-4983',
            // 'Endereco' : 'R. Paula Magalhães, 398 - Centro',
            // 'WhatsApp' : '8235214983',
            // 'Email' : ''
        // }, '1' :
        {
            'Franquia' : 'Maceió',
            'Cidade' : 'Maceió/AL',
            'Fone' : '(82) 9 9417-3733',
            'Endereco' : 'Av. Menino Marcelo, 94 - Serraria',
            'WhatsApp' : '82994173733',
            'Email' : ''
        },
    },
    'Amazonas':
    {
        '0' : 
        {
            'Franquia' : 'Manaus',
            'Cidade' : 'Manaus/AM',
            'Fone' : '(92) 9 8565-0172',
            'Endereco' : 'R. Ernesto Pinto Filho, 27 - Parque 10 de Novembro',
            'WhatsApp' : '92985650172',
            'Email' : ''
        },
    },
    'Bahia':
    {
        '0' : 
        {
            'Franquia' : 'Feira de Santana',
            'Cidade' : 'Feira de Santana/BA',
            'Fone' : '(75) 9 9890-2020',
            'Endereco' : 'R. João Beda Mendonça, 39A - Lagoa Salgada',
            'WhatsApp' : '75998902020',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Lauro de Freitas',
            'Cidade' : 'Lauro de Freitas/BA',
            'Fone' : '(71) 9 9936-1372',
            'Endereco' : 'R. Estrala do Mar, 220 - Buraquinho',
            'WhatsApp' : '71999361372',
            'Email' : ''
        }, '2' : 
        {
            'Franquia' : 'Luis Eduardo Magalhães',
            'Cidade' : 'Luis Eduardo Magalhães/BA',
            'Fone' : '(62) 9 8469-1946',
            'Endereco' : 'R. Rondônia, 631 - Mimoso do Oeste',
            'WhatsApp' : '62984691946',
            'Email' : ''
        }, '3' :
        // {
            // 'Franquia' : 'Porto Seguro',
            // 'Cidade' : 'Ibicarai/BA',
            // 'Fone' : '(73) 3613-6312',
            // 'Endereco' : 'R. Castro Alves, 416 - Centro',
            // 'WhatsApp' : '7336136312',
            // 'Email' : ''
        // }, '4' : 
        {
            'Franquia' : 'Vitória da Conquista',
            'Cidade' : 'Caetite/BA',
            'Fone' : '(75) 9 9890-2020',
            'Endereco' : 'Av. 01, SN - Bras',
            'WhatsApp' : '75998902020',
            'Email' : ''
        },
    },
    'Ceara':
    {
        '0' : 
        {
            'Franquia' : 'Canindé',
            'Cidade' : 'Fortaleza/CE',
            'Fone' : '(85) 9 9299-3627',
            'Endereco' : 'Av. General Osório de Paiva, 4545 - Canindezinho',
            'WhatsApp' : '85992993627',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Juazeiro do Norte',
            'Cidade' : 'Juazeiro do Norte/CE',
            'Fone' : '(88) 9 8821-8984',
            'Endereco' : 'Av. Governador Plácido Aderaldo Castelo, 1733 - Planalto',
            'WhatsApp' : '88988218984',
            'Email' : ''
        },
    },
    'Distrito Federal':
    {
        '0' :
        {
            'Franquia' : 'Brasília',
            'Cidade' : 'Brasília/DF',
            'Fone' : '(61) 9 8449-0177',
            'Endereco' : 'Trecho STRC Trecho 4 Bloco H Lote, 2 - Zona Industrial (Guará)',
            'WhatsApp' : '61984490177',
            'Email' : ''
        },
    },
    'Espirito Santo':
    {
        '0' :
        {
            'Franquia' : 'Vitória',
            'Cidade' : 'Vilha Velha/ES',
            'Fone' : '(27) 9 9644-0675',
            'Endereco' : 'Av. Carlos Lindernberg, 2169 - Santa Inês',
            'WhatsApp' : '27996440675',
            'Email' : ''
        },
    },
    'Goias':
    {
        '0' :
        {
            'Franquia' : 'Goiânia',
            'Cidade' : 'Goiânia/GO',
            'Fone' : '(62) 9 9865-0172',
            'Endereco' : 'R. Rit3, 318 - Res. Itamaraca',
            'WhatsApp' : '62998650172',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Uruaçu',
            'Cidade' : 'Uruaçu/GO',
            'Fone' : '(62) 9 8574-8652',
            'Endereco' : 'Av. Campo Agrígola, SN - Vila Nova II',
            'WhatsApp' : '62985748652',
            'Email' : ''
        }, '2' :
        {
            'Franquia' : 'Rio Verde',
            'Cidade' : 'Rio Verde/MT',
            'Fone' : '(64) 9 9294-5334',
            'Endereco' : 'R. Dona Maricota, SN - Setor Oeste',
            'WhatsApp' : '64992945334',
            'Email' : ''
        }
    },
    'Maranhao':
    {
        '0' :
        {
            'Franquia' : 'Imperatriz',
            'Cidade' : 'Imperatriz/MA',
            'Fone' : '(99) 9 8524-9039',
            'Endereco' : 'Av. Jacob, 62 - Jardim Tropical',
            'WhatsApp' : '99985249039',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'São Luis',
            'Cidade' : 'Imperatriz/MA',
            'Fone' : '(99) 9 8502-7632',
            'Endereco' : 'Av. Jacob, 62 - Jardim Tropical',
            'WhatsApp' : '99985027632',
            'Email' : ''
        }, '2' :
        {
            'Franquia' : 'Araguaína',
            'Cidade' : 'Imperatriz',
            'Fone' : '(99) 9 8513-6181',
            'Endereco' : 'Av. Jacob, 62 - Jardim Tropical',
            'WhatsApp' : '99985136181',
            'Email' : ''
        },
    },
    'Mato Grosso':
    {
        '0' :
        {
            'Franquia' : 'Cuiabá',
            'Cidade' : 'Cuiabá/MT',
            'Fone' : '(65) 9 9677-5722',
            'Endereco' : 'Av. Archimedes Pereira Lima, 38 - Cachoeira das Garças',
            'WhatsApp' : '65996775722',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Sorriso',
            'Cidade' : 'Cuibá/MT',
            'Fone' : '(65) 9 9677-5722',
            'Endereco' : 'Av. Archimedes Pereira Lima, 38 - Cachoeira das Garças',
            'WhatsApp' : '65996775722',
            'Email' : ''
        }
    },
    'Mato Grosso do Sul':
    {
        '0' :
        {
            'Franquia' : 'Campo Grande',
            'Cidade' : 'Campo Grande/MS',
            'Fone' : '(67) 9 9257-0905',
            'Endereco' : 'R. Caxias do Sul, 60 - Coronel Antônio',
            'WhatsApp' : '67992570905',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Dourados',
            'Cidade' : 'Dourados/MS',
            'Fone' : '(67) 4042-1494',
            'Endereco' : 'R. Guanabara, 930 - Vila São Francisco',
            'WhatsApp' : '6740421494',
            'Email' : ''
        },
    },
    'Minas Gerais':
    {
        '0' :
        {
            'Franquia' : 'Belo Horizonte',
            'Cidade' : 'Nova Lima/MG',
            'Fone' : '(31) 9 7101-9069',
            'Endereco' : 'R. Nova Lima, 77 - Jardim Canadá',
            'WhatsApp' : '31971019069',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Patos de Minas',
            'Cidade' : 'Nova Lima/MG',
            'Fone' : '(34) 9 9772-9589',
            'Endereco' : 'R. Nova Lima, 77 - Jardim Canadá',
            'WhatsApp' : '34997729589',
            'Email' : ''
        }, '2' :
        {
            'Franquia' : 'São João Del-Rei',
            'Cidade' : 'Coronel Xavier Charves/MG',
            'Fone' : '(31) 9 9523-8166',
            'Endereco' : 'R. Antônio Ambrósio de Resende, 44 - Centro',
            'WhatsApp' : '31995238166',
            'Email' : ''
        // }, '3' :
        // {
            // 'Franquia' : 'Uberlândia',
            // 'Cidade' : 'Uberlândia/MG',
            // 'Fone' : '(45) 9 9999-1827',
            // 'Endereco' : 'R. Sacadura Cabral, 443, Alto Umuarama III (Loteamento)',
            // 'WhatsApp' : '45999991827',
            // 'Email' : ''
        }
    },
    'Para':
    {
        '0' :
        {
            'Franquia' : 'Belém',
            'Cidade' : 'Belém/PA',
            'Fone' : '(91) 4104-9055',
            'Endereco' : 'R. Tv Perebebui, 704 - Pedreira',
            'WhatsApp' : '9141049055',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Santarém',
            'Cidade' : 'Santarém/PA',
            'Fone' : '(93) 3222-9808',
            'Endereco' : 'Travessa Turiano Meira, 1895 - Interventoria',
            'WhatsApp' : '9332229808',
            'Email' : ''
        },
    },
    'Paraiba':
    {
        '0' :
        {
            'Franquia' : 'Campina Grande',
            'Cidade' : 'João Pessoa/PB',
            'Fone' : '(83) 9 9198-7677',
            'Endereco' : 'R. Ricardo Márcio da Silva Costa, 69 - Mangabeira',
            'WhatsApp' : '83991987677',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'João Pessoa',
            'Cidade' : 'João Pessoa/PB',
            'Fone' : '(83) 9 9198-7677',
            'Endereco' : 'R. Ricardo Márcio da Silva Costa, 69 - Mangabeira',
            'WhatsApp' : '83991987677',
            'Email' : ''
        },
    },
    'Parana':
    {
        '0' :
        {
            'Franquia' : 'Castro',
            'Cidade' : 'Castro/PR',
            'Fone' : '(42) 9 9950-5429',
            'Endereco' : 'R. Doutor Jorge Xavier da Silva, 926 - Centro',
            'WhatsApp' : '42999505429',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Curitiba',
            'Cidade' : 'Guarapuava/PR',
            'Fone' : '(41) 9 8740-9797',
            'Endereco' : 'R. Professor Iank, 495 - Bonsucesso',
            'WhatsApp' : '41987409797',
            'Email' : ''
        }, '2' :
        {
            'Franquia' : 'Francisco Beltrão',
            'Cidade' : 'Francisco Beltrão/PR',
            'Fone' : '(46) 9 9933-8200',
            'Endereco' : 'R. Paraíba, 57 - Vila Nova',
            'WhatsApp' : '46999338200',
            'Email' : ''
        }, '3' :
        {
            'Franquia' : 'Guarapuava',
            'Cidade' : 'Guarapuava/PR',
            'Fone' : '(41) 9 8740-9797',
            'Endereco' : 'R. Professor Iank, 495 - Bonsucesso',
            'WhatsApp' : '41987409797',
            'Email' : ''
        }, '4' :
        {
            'Franquia' : 'Londrina',
            'Cidade' : 'Londrina/PR',
            'Fone' : '(43) 9 9682-1375',
            'Endereco' : 'R. Pedro Botelho de Rezende, 2607 - Jardim Burle Marx',
            'WhatsApp' : '43996821375',
            'Email' : ''
        }, '5' :
        {
            'Franquia' : 'Marília',
            'Cidade' : 'Londrina/PR',
            'Fone' : '(43) 9 9682-1375',
            'Endereco' : 'R. Pedro Botelho de Rezende, 2607 - Jardim Burle Marx',
            'WhatsApp' : '43996821375',
            'Email' : ''
        }, '6' :
        {
            'Franquia' : 'Umuarama',
            'Cidade' : 'Cianorte/PR',
            'Fone' : '(44) 3623-1939',
            'Endereco' : 'R. Alvares Cabral, 829 - Zona 01',
            'WhatsApp' : '4436231939',
            'Email' : ''
        }, '7' :
        {
            'Franquia' : 'São Lourenço do Oeste',
            'Cidade' : 'Vitorino/PR',
            'Fone' : '(49) 9 9973-7501',
            'Endereco' : 'R. Mato Grosso, 36 - Província',
            'WhatsApp' : '49999737501',
            'Email' : ''
        }, '8' :
        {
            'Franquia' : 'Dois Vizinhos',
            'Cidade' : 'Francisco Beltrão/PR',
            'Fone' : '(46) 9 9933-8200',
            'Endereco' : 'R. Paraíba, 57 - Vila Nova',
            'WhatsApp' : '46999338200',
            'Email' : ''
        }
    },
    'Pernambuco':
    {
        '0' :
        {
            'Franquia' : 'Recife',
            'Cidade' : 'Recife/PE',
            'Fone' : '(81) 7111-4986',
            'Endereco' : 'R. da Aurora, 295 - Boa Vista',
            'WhatsApp' : '8171114986',
            'Email' : ''
        },
    },
    'Rio de Janeiro':
    {
        '0' :
        {
            'Franquia' : 'Nova Friburgo',
            'Cidade' : 'Nova Friburgo/RJ',
            'Fone' : '(22) 9 9205-7470',
            'Endereco' : 'R. Sebastião Martins, 272 - Conselheiro Paulino',
            'WhatsApp' : '22992057470',
            'Email' : ''
        },
    },
    'Rio Grande do Norte':
    {
        '0' :
        {
            'Franquia' : 'Natal',
            'Cidade' : 'Natal/RN',
            'Fone' : '(84) 9 8803-7090',
            'Endereco' : 'R. Presidente Gonçalves, 857 - Alecrim',
            'WhatsApp' : '84988037090',
            'Email' : ''
        },
    },
    'Rio Grande do Sul':
    {
        '0' :
        {
            'Franquia' : 'Carazinho',
            'Cidade' : 'Carazinho/RS',
            'Fone' : '(54) 9 9148-8416',
            'Endereco' : 'Av. Flores da Cunha, 2834 - Glória',
            'WhatsApp' : '54991488416',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Caxias do Sul',
            'Cidade' : 'Caxias do Sul/RS',
            'Fone' : '(54) 3067-4551',
            'Endereco' : 'R. João Nichele, 2743 - Cinquentenário',
            'WhatsApp' : '5430674551',
            'Email' : ''
        }, '2' :
        {
            'Franquia' : 'Santa Cruz do Sul',
            'Cidade' : 'Santa Cruz do Sul/RS',
            'Fone' : '(51) 9 9886-2585',
            'Endereco' : 'R. Vereador Rauber Filho, 51 - Germânia',
            'WhatsApp' : '51998862585',
            'Email' : ''
        }, '3' :
        {
            'Franquia' : 'São Leopoldo',
            'Cidade' : 'São Leopoldo/RS',
            'Fone' : '(51) 9 9735-2828',
            'Endereco' : 'Av. Mauá, 1980 - Santos Dumont',
            'WhatsApp' : '51997352828',
            'Email' : ''
        }
    },
    'Rondonia':
    {
        '0' :
        {
            'Franquia' : 'Vilhena',
            'Cidade' : 'Vilhena/RO',
            'Fone' : '(69) 9 9215-2629',
            'Endereco' : 'Av. Sabino Bezerra de Queiroz, 3860 - Jardim América',
            'WhatsApp' : '69992152629',
            'Email' : ''
        },
    },
    'Santa Catarina':
    {
        '0' :
        {
            'Franquia' : 'Blumenau',
            'Cidade' : 'Indaial/SC',
            'Fone' : '(47) 9 9653-0214',
            'Endereco' : 'R. Augusto Hasse até 1698 lado par, 764 - Benedito',
            'WhatsApp' : '47996530214',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'Mafra',
            'Cidade' : 'Mafra/SC',
            'Fone' : '(47) 3642-1015',
            'Endereco' : 'R. Pioneiro Antônio Bartneck, 332 - Vila Nova',
            'WhatsApp' : '4736421015',
            'Email' : ''
        },
    },
    'Sao Paulo':
    {
        '0' :
        {
            'Franquia' : 'Franca',
            'Cidade' : 'Franca/SP',
            'Fone' : '(16) 9 9740-7599',
            'Endereco' : 'R. Carlos do Carmo, 838 - Cidade Nova',
            'WhatsApp' : '16997407599',
            'Email' : ''
        }, '1' :
        {
            'Franquia' : 'São José do Rio Preto',
            'Cidade' : 'Guapiaçu/SP',
            'Fone' : '(17) 9 8200-0274',
            'Endereco' : 'Av. Rubens Melazi, 190 - Residencial Bem Brasil',
            'WhatsApp' : '17982000274',
            'Email' : ''
        },'2' :
        {
            'Franquia' : 'São Paulo',
            'Cidade' : 'São Paulo/SP',
            'Fone' : '(11) 9 8759-0329',
            'Endereco' : 'R. Laguna',
            'WhatsApp' : '11987590329',
            'Email' : ''
        }, '3' :
        {
            'Franquia' : 'Taubaté',
            'Cidade' : 'Taubaté/SP',
            'Fone' : '(12) 9 9175-4450',
            'Endereco' : 'R. Marechal Arthur da Costa e Silva',
            'WhatsApp' : '12991754450',
            'Email' : ''
        },
    },
    // 'Tocantins':
    // {
        // '0' :
        // {
            // 'Franquia' : 'Palmas',
            // 'Cidade' : 'Palmas/TO',
            // 'Fone' : '(63) 9 9263-7821',
            // 'Endereco' : 'Quadra 112 Sul Rua SR 5, SN - Plano Diretor Sul',
            // 'WhatsApp' : '63992637821',
            // 'Email' : ''
        // },
    // },
}

var ultimoEstadoSelecionado = '';

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country'],
        ['Brazil'],
        ['Acre'],
        ['Alagoas'],
        ['Amapa'],
        ['Amazonas'],
        ['Bahia'],
        ['Ceara'],
        ['Distrito Federal'],
        ['Espirito Santo'],
        ['Goias'],
        ['Maranhao'],
        ['Mato Grosso'],
        ['Mato Grosso do Sul'],
        ['Minas Gerais'],
        ['Para'],
        ['Paraiba'],
        ['Parana'],
        ['Pernambuco'],
        ['Piaui'],
        ['Rio de Janeiro'],
        ['Rio Grande do Norte'],
        ['Rio Grande do Sul'],
        ['Rondonia'],
        ['Roraima'],
        ['Santa Catarina'],
        ['Sao Paulo'],
        ['Sergipe'],
        ['Tocantins']
    ]);

    var options = {
        region: 'BR',
        resolution: 'provinces',
        datalessRegionColor: 'white',
        defaultColor: '#F1F2F3',
        enableRegionInteractivity: true
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions'));

    function myClickHandler(){
        var selection = chart.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                message += '{' + item.row + ',column:' + item.column + '}';
            } else if (item.row != null) {
                message += '' + item.row + '';
            } else if (item.column != null) {
                message += '{column:' + item.column + '}';
            }
        }
        if (message == '') {
            message = ultimoEstadoSelecionado;
        }else{
            ultimoEstadoSelecionado = message;
        }
        document.getElementById("dadosLojas").innerHTML = '';
        for(var i = 0; i < Object.keys(unidades).length; i ++) { 
            document.getElementById("estado").innerHTML = dicEstados[message];
            if(unidades[dicEstados[message]][i] != undefined){
                document.getElementById("dadosLojas").innerHTML += 
                '<p class="w700 f24 c-cinzaMedio mb-3">' + unidades[dicEstados[message]][i]['Franquia'] + '</p>' +
                '<p class="w400 f16 c-cinzaMedio mb-2"><span class="w700">Cidade:</span> ' + unidades[dicEstados[message]][i]['Cidade'] + '</p>' +
                '<p class="w400 f16 c-laranja mb-2"><span class="w700 c-cinzaMedio">Telefone:</span> ' + unidades[dicEstados[message]][i]['Fone'] + '</p>' +
                '<p class="w400 lh20 f16 c-cinzaMedio mb-2"><span class="w700">End.:</span> ' + unidades[dicEstados[message]][i]['Endereco'] + '</p>' +
                '<p class="w400 c-cinzaMedio mb-2"><span class="w700">WhatsApp:</span> ' +
                    '<a class="transitions f16 lh16 border-radius-8 border-laranja c-branco bg-laranja ml-3 p-3" href="https://api.whatsapp.com/send?phone=55' + unidades[dicEstados[message]][i]['WhatsApp'] + '&text=Ol%C3%A1..." target="_blank">' +
                        '<i class="fab fa-whatsapp mr-1"></i> Iniciar conversa' +
                    '</a>' +
                '</p>' +
                // '<p class="w400 f16 c-cinzaMedio mb-2">' + unidades[dicEstados[message]][i]['Email'] + '</p>' +
                '<hr class="linha my-5">';
            }             
        }
    }

    google.visualization.events.addListener(chart, 'select', myClickHandler);

    chart.draw(data, options);

    $('#seletorCombo').change(function() {
        valEstado = $(this).val();
        arraySelection = [];
        arraySelection.push({column:null,row:Number(valEstado)});

        function myComboHandler(option) {
            var selection = option;
            console.log(selection);
            var message = '';
            for (var i = 0; i < selection.length; i++) {
                var item = selection[i];
                if (item.row != null && item.column != null) {
                    message += '{' + item.row + ',column:' + item.column + '}';
                } else if (item.row != null) {
                    message += '' + item.row + '';
                } else if (item.column != null) {
                    message += '{column:' + item.column + '}';
                }
            }
            if (message == '') {
                message = 'nothing';
                return false;
            }
            document.getElementById("dadosLojas").innerHTML = '';
            for(var i = 0; i < Object.keys(unidades).length;  i ++){ 
                document.getElementById("estado").innerHTML = dicEstados[message];
                document.getElementById("dadosLojas").innerHTML += 
                '<p class="w700 f24 c-cinzaMedio mb-3">' + unidades[dicEstados[message]][i]['Franquia'] + '</p>' +
                '<p class="w400 f16 c-cinzaMedio mb-2"><span class="w700">Cidade:</span> ' + unidades[dicEstados[message]][i]['Cidade'] + '</p>' +
                '<p class="w400 f16 c-laranja mb-2"><span class="w700 c-cinzaMedio">Telefone:</span> ' + unidades[dicEstados[message]][i]['Fone'] + '</p>' +
                '<p class="w400 lh20 f16 c-cinzaMedio mb-4"><span class="w700">End.:</span> ' + unidades[dicEstados[message]][i]['Endereco'] + '</p>' +
                '<p class="w400 c-cinzaMedio mb-2"><span class="w700">WhatsApp:</span> ' +
                    '<a class="transitions f16 lh16 border-radius-8 border-laranja c-branco bg-laranja ml-3 p-3" href="https://api.whatsapp.com/send?phone=55' + unidades[dicEstados[message]][i]['WhatsApp'] + '&text=Ol%C3%A1..." target="_blank">' +
                        '<i class="fab fa-whatsapp mr-1"></i> Iniciar conversa' +
                    '</a>' +
                '</p>' +
                // '<p class="w400 f16 c-cinzaMedio mb-2">' + unidades[dicEstados[message]][i]['Email'] + '</p>' +
                '<hr class="linha my-5">';
            }
        }

        google.visualization.events.addListener(chart, 'select', myComboHandler);

        chart.draw(data, options);

        myComboHandler(arraySelection);
    });
}