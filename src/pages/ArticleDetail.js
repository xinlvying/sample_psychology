import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Button,
  WebView
} from 'react-native';

import FitImage from "react-native-fit-image";
import Markdown, { getUniqueID } from 'react-native-markdown-renderer';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

const copy = `文章 [**你好，我叫焦虑**](/materials/9)**（点击可查看）告**诉了大家：

*   **焦虑是什么？**
    
*   **焦虑和焦虑障碍有什么区别？**
    
*   **焦虑障碍有哪些类型和表现？**
    

今天的这篇文章是如何自我评估焦虑状态，以及焦虑障碍的治疗方法有哪些。一起来看文章吧~

你也可以把这篇文章，转发给经常焦虑的朋友，会有帮助的。

![](//jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg)

**我焦虑了，该咋办？**

**文｜闫煜蕾** 简单心理咨询师  
  
  
**一、自我评估焦虑水平的方法**  
 

**►** **焦虑情绪的强度**  
  
可以用**主观评分表**来评估自己的情绪。  
  
大��可以在想象中画这样的一只**温度计**：温度从低到高分别是0-8，**0就表示完全没有焦虑情绪**，**8表示你能想象的最焦虑的状况**。而4是个中间值，这个焦虑的水平为多一分就感觉痛苦感出来了，少一分就觉得这事儿没啥大不了的。

![](//jdxl-img.b0.upaiyun.com/post/d2946958389f4e12bfa3f9e2df5199cb.jpeg)  
 

然后，你就可以去**评估自己最近的焦虑水平**是4以下还是4以上？如果是4以上，是靠近8？还是靠近4？这样大概就能知道自己总处在怎样的焦虑水平上了。  
  
还可以用这个主观评分表去**评估单独某件引起焦虑的事情**。如果只是偶尔有一些事情评分比较高，大多数情况下都在4以下，那就没什么关系。**但如果很多事情都能评分到4以上，并且对最近一段时间的整体评价都在4分以上，**比如一周，或一个月，**那就是比较高的焦虑水平了**。  
 

**►** **社会功能的损害**  
  
即焦虑症状在多大程度上损害了社会功能。所谓**社会功能**，**是指在现实世界中需要去做的事情**，比如学生需要去上学，成人需要去工作（可以从这几个方面考虑的社会功能，**Work, Love, Fun**，即工作和学习，恋爱和人际，娱乐和休息）。  
  
我们需要来评估，**焦虑使自己在多大程度上想做的事情做不了？该做的事情做不好？**  
  
同样也可以去想象那个**温度计**，0代表对生活没有任何干扰，8代表生活因为焦虑已经完全没法运转了，4代表生活被焦虑带来的消极影响是中等程度的。如果小于4，则表示这个干扰还行，生活还没有乱套，如果大于4 ，表明很多事都因焦虑变得很糟糕。你会给你社会功能受损的分数打几分呢？  
  
需要注意的是，**自我评估不是诊断**，也不能代替精神科医师或者临床心理工作者的评估工作，因为自我评估会带有一定认知偏差和盲点。如果感觉自己焦虑偏高，体会到了比较明显的情绪痛苦，且持续了一段时间，建议去看专业的临床心理治疗师。  
  
  
**二、高焦虑的自助办法**

  
****►**  正念**是一种对高焦虑情绪比较有效的办法。  
  
正念疗法的创立者**卡巴金**写的《此刻是一枝花》，也可以购买阅读。实际上佛教禅宗、打坐冥想的这种修行方式和正念也有很多相通之处。瑜伽中的**冥想术**也对改善焦虑情绪有很好的帮助。焦虑情绪偏高的人还可以去参加**正念的工作坊**和**团体治疗小组**。  
 

![](//jdxl-img.b0.upaiyun.com/post/788ea972eb314d358382b5d3e6526f89.png)

要注意的是，**任何自助方法都不会像吃止痛片一样即刻起效**。焦虑是一个慢性的问题，因此它也提示我们应该去建立一些持久的应对方法，不管正念还是瑜伽，需要去把它变成生活的一部分。

**►**  自助方法也有一定的局限性：  
第一，人是有惰性的，所以很少有人能够把自助的方法坚持下来；  
第二，在自助的过程中，会遇到一些困难，如果不能与专业的咨询师讨论解决这些困难，自助的效果会大打折扣。  
  
**因此，如果评估的焦虑水平较高，建议去见一见专业的心理咨询师。**  
  
  
**三、在专业的心理咨询中，会怎样来治疗？**

  
**►** **社交焦虑——认知与暴露疗法及团体治疗**  
  
**➀ 认知疗法**基本的假设是，情绪是由我们的认知解释决定的，而不是由情境本身决定的。认知疗法，就是**改变这种决定情绪的认知方式，来取得情绪的改变**。  
  
认知疗法认为，很多焦虑情绪与个体的自动化认知有关系，较多是因为个体在情境下产生的一种负性自动思维。这些思维有着两种显著的特征：第一是**高估坏事发生的可能性**，第二是**高估坏事发生的严重后果**。而正是这种负性自动思维，让人非常焦虑。

举个例子，有个典型的社交焦虑障碍患者，和别人说话时非常紧张。但是，这种紧张情绪并不是因为和别人讲话就必然导致的，而是因为在和别人讲话时产生了一种自动化的认知，这种自动化的认知里有这样一种负性自动思维：“如果我说错了，其他人会看不起我。”（高估坏事发生的严重后果）。

  
在认知治疗中，咨询师会和来访者对负性自动思���进行**认知重建**，找出负性自动思维的不合理之处。  
 

还是上面这个例子，“如果其他人说错了，我一定看不起其他人吗？”、“即便有一些人看不起我，那么这会导致怎样的严重后果呢？”

  
通过反复地思维练习，让来访者**察觉到自己的负性自动思维**，也能**意识到其中的认知偏差**，并**反驳自己的不合理信念**。这也就基本上实现了治疗的目标。

![](//jdxl-img.b0.upaiyun.com/post/39c642924b9846c783f1d3d221c5205f.gif)  
 

**➁ 暴露疗法则偏重于行为上的矫正**。简言之，就是**去掉回避行为**。  
  
比如，如果非常回避社交场合，那就告诉自己不能回避，要去，并在社交场合下**体会自己的焦虑**，**识别**焦虑背后的信念是否有**不合理之处**，并且**适应**在社交场合下的焦虑，最终实现不再回避。  
  
➂ 另外，**团体治疗**对社交焦虑的效果也有大量研究证实。  
  
团体治疗给来访者们提供了一个**真实的社交情境**，社交焦虑有机会暴露在团体成员之间。团体治疗师和团体成员可以在这个情境中**觉察这些焦虑**，并有机会做一些**社交行为上的****试验**，也有机会带着觉察去验证过度的焦虑是不需要的，让来访意识到不擅长社交也不会导致什么严重的后果。  
 

**►** **广泛性焦虑——认知行为治疗**

广泛性焦虑最核心的特征就是**过度担忧**，并存在两种与过度担忧相关的认知歪曲：夸大坏事发生的可能性，夸大后果的严重性（灾难化思维）。  
  
单纯用放松训练对于过度担忧的效果并不是很好，而认知行为治疗和放松训练结合起来是更好的治疗方案。  
  
就像如何应对社交焦虑一样，治疗师和来访者去探索在这些焦虑情绪背后的认知歪曲，然后试着**用更加理性的想法去代替这些认知歪曲**。同时，可以采用暴露疗法，把试图消除担忧的行为停下来，**暴露在担忧之中，以习惯这些担忧**。  
 

![](//jdxl-img.b0.upaiyun.com/post/e9452005b83e42be9011798290234fea.gif)

**►** **惊恐障碍与场所恐惧症——惊恐控制治疗**  
  
包括**认知重建**、**渐进式的内部感觉暴露**（比如椅上旋转和过度换气）、**渐进式肌肉放松**等。  
  
如果是伴场所恐惧的惊恐障碍的话，可以进行**现场暴露**。  
  
另外，临床研究发现心理治疗方案的疗效与药物治疗，以及心理治疗联合药物治疗相比是一样的。也就是说不一定非要服药，且心理治疗的效果比药物治疗的效果更持久。  
  
  
**四、这样一个小“栗”子**  
 

有这样一位来访者，他患有严重的**社交焦虑**，害怕和别人说话，在了解他是害怕别人给他负面的评价的基础上，咨询师引导来访探索为什么他这么害怕负面评价。

通过对来访童年及父母之间互动关系的探索了解到，来访有位非常挑剔、总是批评他的母亲。在来访的心理世界中，得到妈妈的负面反馈是非常可怕的一件事，因为这让他觉得自己是个毫无用处、一点价值都没有的人。  
  
所以在小时候，他会非常努力去避免得到这样的反馈，那就必须去猜测妈妈希望他怎么做、怎么说，然后他就那样去做。当他长大后，他也这样去猜测周围的人希望他怎么做、怎么说，可是并不能总是猜测明白。因此他很痛苦，觉得自己每天都在得罪别人，让别人不满意，而因为他让别人不满意，所以他是个失败者。  
  
探索了这些内在的心理原因后，来访就有机会得到新的内省：比如，自己活着并不是为了取悦别人、让别人满意，自己也是有来自内心的需求的；即便其他人对自己不满意，也并不意味着自己就是个失败者。

在心理治疗中（动力学取向），咨询师帮助来访将理智上知道的东西和情感进行连接，这就让来访真的有一天就开始觉得，自己真的是个蛮好的人，不是个失败者。

当获得这样的内省和认知上的转变后，以前有问题的行为模式就跟着发生了变化。

如果一个人能够去探索和理解他的焦虑情绪背后的心理冲突，对于他解决这些焦虑带来的现实问题会非常有帮助。

**精彩问答：**

**Q 1:** 我在过去半年内出现过3-4次心跳加速、呼吸急促，需静坐30-60分钟休息才能平复。看过医生说无异常，只说是心脏神经官能症。请问这个是不是不用太当回事，自己多调节就好了？  
  
**闫煜蕾** ：看起来像是惊恐发作。但是需要看这种发作之后，是不是心理上很害怕再次发作。如果不是很害怕，且医生检查也并无大碍，那有可能是体质上比较敏感。另外，有些人的气质就是焦虑类型的，这种类型的人有较强的生理唤醒，对于躯体的反应敏感度很高，更容易感受到内在感觉的变化。  
  
要提醒注意的是，不要纠结于它会不会再来，身体难受是难受，但是你不去管它，过去就过去了，但是如果一直害怕再次发作，这样焦虑就上升了。

**Q 2:** 每次遇到比赛或者比较紧张的时候，会拉肚子，这是焦虑的表现吗？  
  
****闫煜蕾** ：**这个是比较明显的肠易激惹症，是比较典型的焦虑障碍。

****Q 3:**** 不能一个人独处是不是焦虑呢？  
  
****闫煜蕾** ：**社交焦虑和性格内向是有区别的。社交焦虑会带来社会功能的损害，且有痛苦的感觉，内向不会太有这种痛苦感，因为非常接纳这样的状态。  
 

******Q 4:****** 对于焦虑，是否在有心理治疗的前提下，尽量选择心理治疗而非药物治疗？  
  
****闫煜蕾** ：**这个一直有很多争议。很多时候，精神科医师觉得应该加入药物治疗的，但是也有很多研究（将很多很多临床研究放在一起的元分析）证实，单纯的心理治疗，与药物治疗联合心理治疗相，与单纯的药物治疗，三者效果是差不多的。所以说，焦虑障碍在临床证据上显示，是没有必要服药的，而且还有证据显示，单纯心理治疗的效果要比单纯药物治疗的效果更持久。  
  
这里还要多说一句，如果大家有去看精神科医师，有进行药物治疗，大家还是要谨遵医嘱的，因为精神科医师是有权通过药物来对患者症状进行治疗的。  
  
  
**“任何心理问题都不是只言片语就能解决的。如果你识别到了你有这样的痛苦和需要，可以去找各专业的心理咨询师，分享这种感受，在咨询室中系统地专业地去解决这些问题。”**

本文首发于公众号简单心理（janelee1231）  
公众号原创文章归简单心理版权所有  
任何组织，机构和个人不得擅自转载和二次修改  
转载请联系：media@jiandanxinli.com
`;

export default class ArticleDetail extends Component {
  // static propTypes = {};
  // static defaultProps = {};

  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <ScrollView style={AppCommonStyles.pageWrapper}>
        <View style={[AppCommonStyles.cardContainer, styles.articleContainer]}>
          {/* 文章头，包含标题，作者 */}
          <View>
            <Text style={styles.articleTitle}>文章标题</Text>
            <View style={styles.author}>
              <Image style={styles.authorImg} source={require('../images/banner.png')} />
              <Text style={styles.authorName}>啦啦啦</Text>
            </View>
          </View>

          {/* 文章主体 */}
          <View style={styles.articleBody}>
            <Markdown
              rules={markdownRules}
              style={markdownStyles}>
              {copy}
            </Markdown>
          </View>

          {/* 文章页脚 */}
          {/* <View style={styles.articleFooter}>
          </View> */}
        </View>

        {/* 相关文章推荐 */}
        {/* <View style={styles.articleListContainer}>
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  articleContainer: {
    margin: 0,
  },
  articleTitle: {
    fontSize: AppFonts.h2.fontSize,
    lineHeight: AppFonts.h2.lineHeight,
    color: AppColors.textTitle
  },
  author: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 15
  },
  authorName: {
    fontSize: 12,
    color: AppColors.textSecondary
  },
  articleBody: {
    marginTop: 30,
    // color: '#333'
  },
  // articleFooter: {

  // },
  // articleListContainer: {

  // }
});

const markdownRules = {
  text: (node, children, parent, styles) =>
    <Text key={getUniqueID()} style={markdownStyles.text}>
      {node.content}
    </Text>,
  image: (node, children, parent, styles) => {
    const imageSrc = 'https:' + node.attributes.src;
    console.log(imageSrc);
    return (
      <FitImage
        resizeMode="contain"
        indicator={true}
        key={node.key}
        style={markdownStyles.image}
        source={{ uri: imageSrc }}
      />
    );
  },
}

// markdown styles
const markdownStyles = {
  // 链接
  link: {
    fontWeight: 'bold',
    color: AppColors.textTitle,
    textDecorationLine: 'underline'
  },
  mailTo: {
    fontWeight: 'bold',
    color: AppColors.textTitle,
    textDecorationLine: 'underline'
  },
  del: {
    textDecorationLine: 'line-through'
  },
  // 段落
  text: {
    color: AppColors.textTitle,
    fontSize: AppFonts.base.size,
    fontFamily: AppFonts.base.family,
    lineHeight: Platform.OS == 'ios' ? AppFonts.h3.lineHeight : AppFonts.h2.lineHeight
  },
  // 粗体
  strong: {
    fontWeight: '900',
    marginTop: 0,
    marginBottom: 10
  },
  // 引用
  blockQuoteSection: {
    padding: 10,
    paddingTop: 5,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: AppColors.textPrimary
  },
  blockQuoteSectionBar: {
    height: null,
    backgroundColor: AppColors.textMuted
  },
  // 行内代码块
  inlineCode: {
    margin: 3,
    padding: 3,
    fontFamily: 'Courier',
    fontWeight: '200',
    color: AppColors.brand.black
  },
  // 图片
  image: {
    flex: 1,
    width: AppSizes.container.width,
    height: 166,
    marginBottom: 0
  },
  heading1: {
    ...AppFonts.h1,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading2: {
    ...AppFonts.h2,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading3: {
    ...AppFonts.h3,
    color: AppColors.textTitle,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10
  },
  heading4: {
    ...AppFonts.h4,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading5: {
    ...AppFonts.h5,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  }
}